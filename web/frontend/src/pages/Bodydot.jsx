import { useEffect, useRef, useState } from 'react'
import { BODYDOT_ORGS, listClients, listSessions, getSession, sessionValidity } from '../api/bodydot'
import { getBodydotTests, getTrainers, unapproveBodydotTest } from '../api/client'
import { openProgram } from '../bodydot/openProgram'
import BodydotCard from '../components/BodydotCard'

const PAGE_SIZE = 25
const PREFETCH_CONCURRENCY = 4
// Ignore every Bodydot test before this date (report gyms). Keep in sync with
// BODYDOT_START_DATE in the backend.
const BODYDOT_START = '2026-05-15'

function normalize(s) {
  return (s || '').normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/\s+/g, ' ').trim()
}
function matchesQuery(name, terms) {
  const n = normalize(name)
  return terms.every((t) => n.includes(t))
}
function formatDate(iso) {
  const d = new Date(iso)
  return isNaN(d) ? null : d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}
function formatDateTime(iso) {
  const d = new Date(iso)
  if (isNaN(d)) return iso
  const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })
  return `${date} · ${time}`
}

// ── Approved test — valid: generate program; invalid: recorded, no program. ──
function CompletedCard({ test, org, picker, onStatus }) {
  const [busy, setBusy] = useState(false)
  const invalid = test.stored?.valid === false

  const handleGenerate = async () => {
    setBusy(true)
    try {
      const session = await getSession(test.client_id, test.session_id)
      openProgram(session, test.client_name || '', org.bilingual)
    } catch (e) {
      alert('Could not generate program: ' + e.message)
    } finally {
      setBusy(false)
    }
  }
  const handleUndo = async () => {
    setBusy(true)
    try {
      const { data } = await unapproveBodydotTest(test.session_id)
      onStatus(test.session_id, data)
    } catch (e) {
      alert('Could not undo: ' + (e.response?.data?.detail || e.message))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`flex items-center justify-between gap-4 rounded-xl border px-5 py-3 ${
      invalid ? 'border-red-900/50 bg-red-950/10' : 'border-emerald-800/60 bg-emerald-950/10'}`}>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          {invalid ? (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800">RECORDED · INVALID</span>
          ) : (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700">APPROVED</span>
          )}
          <h3 className="font-semibold text-white truncate">{test.client_name || '—'}</h3>
        </div>
        <p className="text-xs mt-0.5 text-gray-400">
          {formatDateTime(test.created_at || test.test_date)}
          {!invalid && (test.stored?.trainer_name ? <span className="text-emerald-400"> · {test.stored.trainer_name}</span> : ' · no trainer')}
          {test.stored?.sent ? ' · sent' : ''}
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {picker}
        {!invalid && (
          <button
            onClick={handleGenerate}
            disabled={busy}
            className="text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold"
          >
            {busy ? 'Loading…' : 'Generate Program'}
          </button>
        )}
        <button
          onClick={handleUndo}
          disabled={busy}
          className="text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 disabled:opacity-50 transition-colors"
        >
          Undo
        </button>
      </div>
    </div>
  )
}

// Wraps a client into an approval card: lazily loads its sessions + validity, then
// renders the right card (New / Invalid / Completed). Only fetches what's on screen.
function ClientApprovalCard({ client, org, roster, statusMap, onStatus, searching }) {
  const [sessions, setSessions] = useState(undefined) // undefined=loading, null=error, []
  const [selectedId, setSelectedId] = useState(null)
  const [full, setFull] = useState(undefined)         // full session for the selected id

  useEffect(() => {
    let alive = true
    setSessions(undefined); setSelectedId(null)
    listSessions(client.id)
      .then((s) => alive && setSessions((s || []).filter((x) => (x.createdAt || '').slice(0, 10) >= BODYDOT_START)))
      .catch(() => alive && setSessions(null))
    return () => { alive = false }
  }, [client.id])

  const chosenId = selectedId || (sessions && sessions[0] && sessions[0].id)

  useEffect(() => {
    let alive = true
    if (!chosenId) return
    setFull(undefined)
    getSession(client.id, chosenId).then((f) => alive && setFull(f)).catch(() => alive && setFull(null))
    return () => { alive = false }
  }, [client.id, chosenId])

  const shell = (msg) => (
    <div className="rounded-xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm">
      <span className="font-medium text-white">{client.name || '—'}</span>
      <span className="text-gray-500"> · {msg}</span>
    </div>
  )
  // Hide empty / still-loading clients by default; only reveal them when the
  // user is actively searching (so a specific name can still be found).
  if (sessions === undefined) return searching ? shell('loading tests…') : null
  if (!sessions || !sessions.length) return searching ? shell('no test data') : null

  const chosen = sessions.find((s) => s.id === chosenId) || sessions[0]
  const stored = statusMap[chosenId]
  const val = full ? sessionValidity(full) : null
  const test = {
    client_id: client.id,
    client_name: client.name,
    session_id: chosenId,
    created_at: chosen.createdAt,
    test_date: (chosen.createdAt || '').slice(0, 10),
    valid: val ? val.valid : undefined,
    analyzed: val ? val.analyzed : 0,
    total: val ? val.total : 0,
    stored,
  }

  // The "16 Apr 2026 · 21:20 (latest)" element that sits next to the copy button:
  // a dropdown when the client has multiple sessions, a static label otherwise.
  const picker = sessions.length > 1 ? (
    <select
      value={chosenId}
      onChange={(e) => setSelectedId(e.target.value)}
      className="text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]"
    >
      {sessions.map((s, i) => (
        <option key={s.id} value={s.id}>{formatDateTime(s.createdAt)}{i === 0 ? ' (latest)' : ''}</option>
      ))}
    </select>
  ) : (
    <span className="text-xs text-gray-400 whitespace-nowrap">{formatDateTime(chosen.createdAt)}</span>
  )

  if (stored?.approved) return <CompletedCard test={test} org={org} picker={picker} onStatus={onStatus} />
  if (full === undefined) return shell('checking validity…')

  return <BodydotCard test={test} org={org} roster={roster} onStatus={onStatus} picker={picker} />
}

// ── Report gyms: searchable client list with per-client approval cards ──
function ApprovalBrowser({ org }) {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [roster, setRoster] = useState([])
  const [statusMap, setStatusMap] = useState({})

  useEffect(() => {
    let alive = true
    setLoading(true); setError(null); setClients([]); setQuery(''); setPage(0); setStatusMap({})
    listClients(org.id).then((c) => alive && setClients(c))
      .catch((e) => alive && setError(`Error loading clients: ${e.message}`))
      .finally(() => alive && setLoading(false))
    getTrainers(org.gym, org.branch).then((r) => alive && setRoster(r.data || [])).catch(() => {})
    getBodydotTests(org.gym).then((r) => {
      const m = {}
      for (const row of r.data || []) m[row.session_id] = row
      if (alive) setStatusMap(m)
    }).catch(() => {})
    return () => { alive = false }
  }, [org.id])

  const onStatus = (sid, row) => setStatusMap((p) => ({ ...p, [sid]: row }))

  const terms = normalize(query).split(' ').filter(Boolean)
  const filtered = terms.length ? clients.filter((c) => matchesQuery(c.name, terms)) : clients
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages - 1)
  const visible = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-lg font-semibold text-white">{org.name}</h2>
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(0) }}
          placeholder="Search clients…"
          className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"
        />
      </div>
      {error && <div className="rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm">{error}</div>}
      {loading ? (
        <p className="text-gray-400 text-sm py-4">Loading clients…</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-500 text-sm py-4">{clients.length === 0 ? 'No clients found.' : 'No clients match your search.'}</p>
      ) : (
        <>
          <div className="space-y-3">
            {visible.map((c) => (
              <ClientApprovalCard key={c.id} client={c} org={org} roster={roster} statusMap={statusMap} onStatus={onStatus} searching={terms.length > 0} />
            ))}
          </div>
          <Pagination safePage={safePage} totalPages={totalPages} count={visible.length} total={filtered.length} setPage={setPage} />
        </>
      )}
    </div>
  )
}

// ── Body Coach: original browse-and-generate list (no report / approval) ──
function ClientBrowser({ org }) {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [sessions, setSessions] = useState({})
  const prefetchTokenRef = useRef(0)

  useEffect(() => {
    let alive = true
    setQuery(''); setPage(0); setError(null); setClients([]); setSessions({}); setLoading(true)
    listClients(org.id).then((c) => alive && setClients(c))
      .catch((e) => alive && setError(`Error loading clients: ${e.message}`))
      .finally(() => alive && setLoading(false))
    return () => { alive = false }
  }, [org.id])

  const terms = normalize(query).split(' ').filter(Boolean)
  const filtered = terms.length ? clients.filter((c) => matchesQuery(c.name, terms)) : clients
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages - 1)
  const visible = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE)

  const visibleIds = visible.map((c) => c.id).join(',')
  useEffect(() => {
    if (!visible.length) return
    const token = ++prefetchTokenRef.current
    const todo = visible.filter((c) => sessions[c.id] === undefined)
    if (!todo.length) return
    let i = 0
    const worker = async () => {
      while (i < todo.length) {
        if (token !== prefetchTokenRef.current) return
        const client = todo[i++]
        let value = null
        try { value = await listSessions(client.id) } catch { value = null }
        if (token !== prefetchTokenRef.current) return
        setSessions((prev) => ({ ...prev, [client.id]: value }))
      }
    }
    Promise.all(Array.from({ length: Math.min(PREFETCH_CONCURRENCY, todo.length) }, worker))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleIds])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">{org.name}</h2>
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(0) }}
          placeholder="Search clients…"
          className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"
        />
      </div>
      {error && <div className="rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm">{error}</div>}
      {loading ? (
        <p className="text-gray-400 text-sm py-4">Loading clients…</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-500 text-sm py-4">{clients.length === 0 ? 'No clients found.' : 'No clients match your search.'}</p>
      ) : (
        <>
          <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
            {visible.map((c) => (
              <BrowseRow key={c.id} client={c} bilingual={org.bilingual} sessionInfo={sessions[c.id]} />
            ))}
          </div>
          <Pagination safePage={safePage} totalPages={totalPages} count={visible.length} total={filtered.length} setPage={setPage} />
        </>
      )}
    </div>
  )
}

function BrowseRow({ client, bilingual, sessionInfo }) {
  const [busy, setBusy] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
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
  if (sessionInfo === undefined) dateLabel = <span className="text-gray-600">Loading tests…</span>
  else if (!sessions.length) dateLabel = <span className="text-gray-600">No test data</span>
  else dateLabel = (
    <span className="text-gray-400">
      Test date: {formatDate(sessions[0].createdAt)}
      {hasMultiple && <span className="text-brand-400"> · {sessions.length} tests</span>}
    </span>
  )

  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800 last:border-b-0">
      <div className="min-w-0">
        <p className="font-medium text-white">{client.name || '—'}</p>
        <p className="text-xs mt-0.5">{dateLabel}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {hasMultiple && (
          <select
            value={chosenId}
            onChange={(e) => setSelectedId(e.target.value)}
            disabled={busy}
            className="text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]"
          >
            {sessions.map((s, i) => (
              <option key={s.id} value={s.id}>{formatDateTime(s.createdAt)}{i === 0 ? ' (latest)' : ''}</option>
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

function Pagination({ safePage, totalPages, count, total, setPage }) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-400">
      <span>{safePage * PAGE_SIZE + 1}–{safePage * PAGE_SIZE + count} of {total}</span>
      {totalPages > 1 && (
        <div className="flex items-center gap-2">
          <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={safePage === 0}
            className="px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors">← Prev</button>
          <span className="text-gray-500">Page {safePage + 1} of {totalPages}</span>
          <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={safePage >= totalPages - 1}
            className="px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors">Next →</button>
        </div>
      )}
    </div>
  )
}

export default function Bodydot() {
  const [orgId, setOrgId] = useState(null)
  const activeOrg = BODYDOT_ORGS.find((o) => o.id === orgId)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Bodydot</h1>
        <p className="text-gray-400 text-sm mt-1">Select a center, search a client, then approve and generate programs.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {BODYDOT_ORGS.map((org) => (
          <button
            key={org.id}
            onClick={() => setOrgId(org.id)}
            className={`flex-1 min-w-[200px] text-left rounded-xl border-2 px-5 py-4 transition-colors
              ${orgId === org.id ? 'border-brand-500 bg-brand-900/20' : 'border-gray-700 bg-gray-900 hover:border-gray-500'}`}
          >
            <div className="font-semibold text-white">{org.name}</div>
          </button>
        ))}
      </div>

      {activeOrg && (
        activeOrg.branch
          ? <ApprovalBrowser key={activeOrg.id} org={activeOrg} />
          : <ClientBrowser key={activeOrg.id} org={activeOrg} />
      )}
    </div>
  )
}
