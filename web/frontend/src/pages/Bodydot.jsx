import { useEffect, useRef, useState } from 'react'
import { BODYDOT_ORGS, listClients, listSessions, getSession } from '../api/bodydot'
import programTemplate from '../bodydot/program.html?raw'

// Absolute base for the program's assets (logo + backgrounds live in public/bodydot/).
// Injected as <base> so relative URLs resolve from inside the blob: document.
const ASSETS_BASE = `${window.location.origin}${import.meta.env.BASE_URL}bodydot/`

const PAGE_SIZE = 25
// Concurrent session fetches for the visible page's test dates (kept low — the API rate-limits).
const PREFETCH_CONCURRENCY = 4

// Normalize text for searching: lowercase, strip accents/diacritics (incl. Arabic
// tashkeel), and collapse whitespace. Makes "Alï" match "ali" and Arabic names match
// regardless of diacritics.
function normalize(s) {
  return (s || '')
    .normalize('NFKD')
    .replace(/\p{M}/gu, '') // strip combining marks: Latin accents + Arabic harakat
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

// A client matches if every search term appears somewhere in its normalized name,
// in any order (so "255 sharifa" finds "Sharifa 2553963").
function matchesQuery(name, terms) {
  const n = normalize(name)
  return terms.every((t) => n.includes(t))
}

// Format an ISO session date (createdAt) as e.g. "22 Apr 2026".
function formatDate(iso) {
  const d = new Date(iso)
  if (isNaN(d)) return null
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

// Format an ISO session timestamp as e.g. "22 Apr 2026 · 10:40" — used to tell apart
// multiple sessions taken on the same day.
function formatDateTime(iso) {
  const d = new Date(iso)
  if (isNaN(d)) return iso
  const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })
  return `${date} · ${time}`
}

// Build the standalone program document for a session and open it in a new tab.
// Mirrors QuickGenerate: Blob → object URL → window.open → print (here the program
// prints itself via its own auto-print bootstrap).
function openProgram(session, clientName, bilingual) {
  const payload = {
    session,
    clientName,
    lang: bilingual ? 'bilingual' : 'en',
    autoPrint: true,
  }
  // Inject the <base> (so the stylesheet's url() and the logo resolve against the hosted
  // assets) and the session payload right after the charset meta — before the <style> block,
  // and keeping <meta charset> in the document's first bytes.
  const charset = '<meta charset="UTF-8">'
  const inject =
    `<base href="${ASSETS_BASE}">` +
    `<script>window.__BODYDOT__ = ${JSON.stringify(payload)};</script>`
  const html = programTemplate.replace(charset, `${charset}${inject}`)
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const w = window.open(url, '_blank')
  if (!w) {
    URL.revokeObjectURL(url)
    throw new Error('Popup blocked — allow popups for this site and try again.')
  }
  // Release the object URL once the new tab has loaded it.
  setTimeout(() => URL.revokeObjectURL(url), 60000)
}

function ClientRow({ client, bilingual, sessionInfo }) {
  const [busy, setBusy] = useState(false)
  // Which session to generate; defaults to the latest (index 0). Only matters when >1.
  const [selectedId, setSelectedId] = useState(null)

  // sessionInfo: undefined = still loading, null = error, array = session summaries (newest first)
  const sessions = Array.isArray(sessionInfo) ? sessionInfo : []
  const hasMultiple = sessions.length > 1
  const chosenId = selectedId || (sessions[0] && sessions[0].id)

  const handleGenerate = async () => {
    if (!chosenId) return
    setBusy(true)
    try {
      const session = await getSession(client.id, chosenId)
      openProgram(session, client.name || '', bilingual)
    } catch (e) {
      alert(`Could not generate program for ${client.name || 'client'}: ${e.message}`)
    } finally {
      setBusy(false)
    }
  }

  let dateLabel
  if (sessionInfo === undefined) dateLabel = <span className="text-gray-600">Loading test date…</span>
  else if (!sessions.length) dateLabel = <span className="text-gray-600">No test data</span>
  else
    dateLabel = (
      <span className="text-gray-400">
        Test date: {formatDate(sessions[0].createdAt)}
        {hasMultiple && (
          <span className="text-brand-400"> · {sessions.length} tests</span>
        )}
      </span>
    )

  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800 last:border-b-0">
      <div className="min-w-0">
        <p className="font-medium text-white">{client.name || '—'}</p>
        <p className="text-xs mt-0.5">{dateLabel}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {/* When a client has several sessions (e.g. multiple tests on the same day),
            let the user pick which one to generate. Options show date + time. */}
        {hasMultiple && (
          <select
            value={chosenId}
            onChange={(e) => setSelectedId(e.target.value)}
            disabled={busy}
            className="text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 max-w-[190px]"
          >
            {sessions.map((s, i) => (
              <option key={s.id} value={s.id}>
                {formatDateTime(s.createdAt)}{i === 0 ? ' (latest)' : ''}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={handleGenerate}
          disabled={busy || !chosenId}
          className="text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold"
        >
          {busy ? 'Loading…' : 'Generate Program'}
        </button>
      </div>
    </div>
  )
}

export default function Bodydot() {
  const [orgId, setOrgId] = useState(null)
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [sessions, setSessions] = useState({}) // clientId → session summaries[] | null (error)

  // Bumped whenever the visible set changes, so stale date-prefetches bail out.
  const prefetchTokenRef = useRef(0)

  const activeOrg = BODYDOT_ORGS.find((o) => o.id === orgId)

  const selectOrg = async (org) => {
    setOrgId(org.id)
    setQuery('')
    setPage(0)
    setError(null)
    setClients([])
    setSessions({})
    setLoading(true)
    try {
      setClients(await listClients(org.id))
    } catch (e) {
      setError(`Error loading clients: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  const terms = normalize(query).split(' ').filter(Boolean)
  const filtered = terms.length
    ? clients.filter((c) => matchesQuery(c.name, terms))
    : clients
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages - 1)
  const visible = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE)

  // Fetch the session list (dates + count) only for the clients currently visible.
  const visibleIds = visible.map((c) => c.id).join(',')
  useEffect(() => {
    if (!visible.length) return
    const token = ++prefetchTokenRef.current
    const todo = visible.filter((c) => sessions[c.id] === undefined)
    if (!todo.length) return

    let i = 0
    const worker = async () => {
      while (i < todo.length) {
        if (token !== prefetchTokenRef.current) return // visible set changed — stop
        const client = todo[i++]
        let value = null
        try {
          value = await listSessions(client.id)
        } catch {
          value = null
        }
        if (token !== prefetchTokenRef.current) return
        setSessions((prev) => ({ ...prev, [client.id]: value }))
      }
    }
    Promise.all(
      Array.from({ length: Math.min(PREFETCH_CONCURRENCY, todo.length) }, worker)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleIds])

  const onSearch = (v) => {
    setQuery(v)
    setPage(0)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Bodydot</h1>
        <p className="text-gray-400 text-sm mt-1">Select a center to view clients.</p>
      </div>

      {/* Org cards */}
      <div className="flex flex-wrap gap-3">
        {BODYDOT_ORGS.map((org) => (
          <button
            key={org.id}
            onClick={() => selectOrg(org)}
            className={`flex-1 min-w-[200px] text-left rounded-xl border-2 px-5 py-4 transition-colors
              ${orgId === org.id
                ? 'border-brand-500 bg-brand-900/20'
                : 'border-gray-700 bg-gray-900 hover:border-gray-500'
              }`}
          >
            <div className="font-semibold text-white">{org.name}</div>
          </button>
        ))}
      </div>

      {error && (
        <div className="rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Client list */}
      {orgId && (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-white">{activeOrg?.name}</h2>
            <input
              type="text"
              value={query}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search clients…"
              className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"
            />
          </div>

          {loading ? (
            <p className="text-gray-400 text-sm py-4">Loading clients…</p>
          ) : filtered.length === 0 ? (
            <p className="text-gray-500 text-sm py-4">
              {clients.length === 0 ? 'No clients found.' : 'No clients match your search.'}
            </p>
          ) : (
            <>
              <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
                {visible.map((c) => (
                  <ClientRow
                    key={c.id}
                    client={c}
                    bilingual={activeOrg?.bilingual}
                    sessionInfo={sessions[c.id]}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>
                  {safePage * PAGE_SIZE + 1}–{safePage * PAGE_SIZE + visible.length} of{' '}
                  {filtered.length}
                </span>
                {totalPages > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPage((p) => Math.max(0, p - 1))}
                      disabled={safePage === 0}
                      className="px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 disabled:hover:border-gray-700 transition-colors"
                    >
                      ← Prev
                    </button>
                    <span className="text-gray-500">
                      Page {safePage + 1} of {totalPages}
                    </span>
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                      disabled={safePage >= totalPages - 1}
                      className="px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 disabled:hover:border-gray-700 transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
