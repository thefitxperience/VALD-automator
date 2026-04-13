import { useState, useEffect, useRef } from 'react'
import { getBranches, getTrainers, getAllTrainers, getBranchForTrainer } from '../data/trainers'
import { approveProgram, unapproveProgram, getTrainerWhatsapp, previewHtml, ignoreTest, unignoreTest } from '../api/client'

const TYPE_LABEL = { upper: 'Upper Body', lower: 'Lower Body', full: 'Full Body' }
const STATUS_BADGE = {
  NEW: 'bg-emerald-900/60 text-emerald-300 border border-emerald-700',
  UPDATED: 'bg-amber-900/60 text-amber-300 border border-amber-700',
}

function SearchableSelect({ options, value, onChange, onSelect, placeholder, disabled, inputRef }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)
  const ref = useRef(null)
  const listRef = useRef(null)

  const filtered = query
    ? options.filter(o => o.toLowerCase().includes(query.toLowerCase()))
    : options

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Keep input text in sync with external value changes (e.g. reset or auto-fill)
  useEffect(() => {
    setQuery(value || '')
  }, [value])

  // Reset highlight when filtered list changes
  useEffect(() => { setHighlighted(0) }, [query])

  function select(opt) {
    onChange(opt)
    setQuery(opt)
    setOpen(false)
    if (onSelect) onSelect(opt)
  }

  function handleKeyDown(e) {
    if (!open || filtered.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted(h => Math.min(h + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      select(filtered[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // Scroll highlighted item into view
  useEffect(() => {
    if (!listRef.current) return
    const item = listRef.current.children[highlighted]
    if (item) item.scrollIntoView({ block: 'nearest' })
  }, [highlighted])

  return (
    <div ref={ref} className="relative">
      <input
        ref={inputRef}
        type="text"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50"
        placeholder={placeholder}
        value={query}
        disabled={disabled}
        onChange={e => { setQuery(e.target.value); setOpen(true); if (!e.target.value) onChange('') }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
      />
      {open && !disabled && filtered.length > 0 && (
        <ul ref={listRef} className="absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filtered.map((opt, i) => (
            <li
              key={opt}
              onMouseDown={() => select(opt)}
              onMouseEnter={() => setHighlighted(i)}
              className={`px-3 py-2 text-sm cursor-pointer ${i === highlighted ? 'bg-gray-700 text-white' : opt === value ? 'text-brand-400 font-semibold' : 'text-white'}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function ProgramCard({ test, gym }) {
  const [branch, setBranch] = useState(test.existing_branch || '')
  const [trainer, setTrainer] = useState(test.existing_trainer_name || '')
  const trainerInputRef = useRef(null)
  const [dispatchDate, setDispatchDate] = useState(test.existing_dispatch_date || new Date().toISOString().split('T')[0])

  // Program PDF (generated on demand)
  const [opening, setOpening] = useState(false)

  // Post-approve
  const [approved, setApproved] = useState(false)
  const [saving, setSaving] = useState(false)
  const [ignored, setIgnored] = useState(false)
  const [ignoring, setIgnoring] = useState(false)
  const [whatsappNum, setWhatsappNum] = useState('')

  const branches = getBranches(gym)
  const trainers = branch ? getTrainers(gym, branch) : getAllTrainers(gym)

  function handleTrainerChange(name) {
    setTrainer(name)
    if (!branch && name) {
      const found = getBranchForTrainer(gym, name)
      if (found) setBranch(found)
    }
  }

  useEffect(() => {
    if (gym && branch && trainer) {
      getTrainerWhatsapp(gym, branch, trainer)
        .then((r) => setWhatsappNum(r.data?.whatsapp || ''))
        .catch(() => setWhatsappNum(''))
    }
  }, [gym, branch, trainer])

  // Generate program PDF on demand
  const handleOpen = async () => {
    if (!test.cells_data) {
      const API_BASE = import.meta.env.VITE_API_BASE || 'https://vald-automator.onrender.com'
      window.open(`${API_BASE}/api/programs/preview-demo?gym=${encodeURIComponent(gym)}&test_type=${test.test_type}`, '_blank')
      return
    }
    setOpening(true)
    try {
      const res = await previewHtml({
        gym,
        test_type: test.test_type,
        patient_name: test.patient,
        test_date: test.date,
        cells_data: test.cells_data,
        prev_asymmetries: test.prev_asymmetries || null,
      })
      const blob = new Blob([res.data], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      const w = window.open(url, '_blank')
      if (w) w.addEventListener('load', () => w.print())
    } catch (e) {
      alert('Failed to open program: ' + (e.response?.data?.detail || e.message))
    } finally {
      setOpening(false)
    }
  }

  const handleApprove = async () => {
    if (!branch || !trainer) {
      alert('Please select a branch and trainer before approving.')
      return
    }
    setSaving(true)
    try {
      const res = await approveProgram({
        gym,
        branch,
        client_id: test.external_id !== 'N/A' ? test.external_id : null,
        client_name: test.patient,
        test_type: test.test_type,
        movements: test.movement_count,
        test_date: test.date,
        trainer_name: trainer,
        dispatch_date: dispatchDate,
        check_status: test.status,
        asymmetry_values: test.asymmetry_values || null,
      })
      const id = res.data?.id

      setApproved(true)
    } catch (e) {
      alert('Error approving: ' + (e.response?.data?.detail || e.message))
    } finally {
      setSaving(false)
    }
  }

  const handleIgnore = async () => {
    setIgnoring(true)
    try {
      await ignoreTest({
        gym,
        client_name: test.patient,
        test_type: test.test_type,
        test_date: test.date,
        movements: test.movement_count,
        external_id: test.external_id !== 'N/A' ? test.external_id : null,
      })
      setIgnored(true)
    } catch (e) {
      alert('Error ignoring: ' + (e.response?.data?.detail || e.message))
    } finally {
      setIgnoring(false)
    }
  }

  const handleUnignore = async () => {
    try {
      await unignoreTest({
        gym,
        client_name: test.patient,
        test_type: test.test_type,
        test_date: test.date,
        movements: test.movement_count,
      })
      setIgnored(false)
    } catch (e) {
      alert('Error undoing ignore: ' + (e.response?.data?.detail || e.message))
    }
  }

  const handleUnapprove = async () => {
    try {
      await unapproveProgram({
        gym,
        client_name: test.patient,
        test_type: test.test_type,
        test_date: test.date,
        movements: test.movement_count,
      })
      setApproved(false)
    } catch (e) {
      alert('Error undoing approval: ' + (e.response?.data?.detail || e.message))
    }
  }

  const openWhatsapp = () => {
    if (!whatsappNum) {
      alert('No WhatsApp number set for this trainer.')
      return
    }
    const clean = whatsappNum.replace(/\D/g, '')
    window.open(`https://wa.me/${clean}`, '_blank')
  }

  return (
    <div className={`rounded-xl border p-5 space-y-4 transition-all
      ${approved ? 'border-emerald-700 bg-emerald-950/20' : ignored ? 'border-red-900 bg-red-950/20' : 'border-gray-700 bg-gray-900'}`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_BADGE[test.status]}`}>
              {test.status}
            </span>
            <h3 className="font-semibold text-white">{test.patient}</h3>
            {test.external_id && test.external_id !== 'N/A' && (
              <span className="text-xs text-gray-400 font-mono">#{test.external_id}</span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap gap-3 text-sm text-gray-400">
            <span>{TYPE_LABEL[test.test_type] || test.test_type}</span>
            <span>·</span>
            <span>{test.movement_count} movements</span>
            <span>·</span>
            <span>{test.date}</span>
            {test.status === 'UPDATED' && (
              <span className="text-amber-400">(was {test.old_count})</span>
            )}
          </div>
        </div>
        {/* Copy client name */}
        <button
          onClick={() => navigator.clipboard.writeText(test.patient)}
          title="Copy client name"
          className="text-gray-600 hover:text-gray-300 transition-colors p-1 rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        </button>
      </div>

      {/* Assignment row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Branch</label>
          <SearchableSelect
            options={branches}
            value={branch}
            onChange={(v) => { setBranch(v); setTrainer('') }}
            onSelect={() => { if (trainerInputRef.current) trainerInputRef.current.focus() }}
            placeholder="Search branch…"
            disabled={approved || ignored}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Trainer</label>
          <SearchableSelect
            options={trainers}
            value={trainer}
            onChange={handleTrainerChange}
            placeholder="Search trainer…"
            disabled={approved || ignored}
            inputRef={trainerInputRef}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Dispatch Date</label>
          <input
            type="date"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
            value={dispatchDate}
            onChange={(e) => setDispatchDate(e.target.value)}
            disabled={approved || ignored}
          />
        </div>
      </div>

      {/* Actions row */}
      <div className="flex flex-wrap gap-2 items-center">

        {/* 1 — Open & Print */}
        <button
          onClick={handleOpen}
          disabled={opening}
          className="text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors"
        >
          {opening ? 'Loading…' : '🖨 Open & Print'}
        </button>

        {/* 2 — Copy File Name (for results PDF) */}
        <button
          onClick={() => {
            const label = { upper: 'Upper Body', lower: 'Lower Body', full: 'Full Body' }[test.test_type] || test.test_type
            navigator.clipboard.writeText(`${test.patient} - ${label}`)
          }}
          className="text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-colors"
        >
          📋 Copy File Name
        </button>

        {/* 3 — Ignore */}
        {!approved && !ignored && (
          <button
            onClick={handleIgnore}
            disabled={ignoring}
            className="text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors"
          >
            {ignoring ? 'Ignoring…' : 'Ignore'}
          </button>
        )}

        <div className="flex-1" />

        {/* 3 — WhatsApp */}
        <button
          onClick={openWhatsapp}
          disabled={!whatsappNum}
          title={!whatsappNum ? 'No WhatsApp number for this trainer' : ''}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp
        </button>

        {/* 5 — Approve / status badge */}
        {approved ? (
          <div className="flex items-center gap-2">
            <span className="text-xs px-4 py-1.5 rounded-lg bg-emerald-700/40 text-emerald-400 font-semibold border border-emerald-700">
              ✓ Approved
            </span>
            <button
              onClick={handleUnapprove}
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors"
            >
              Undo
            </button>
          </div>
        ) : ignored ? (
          <div className="flex items-center gap-2">
            <span className="text-xs px-4 py-1.5 rounded-lg bg-red-900/40 text-red-400 font-semibold border border-red-800">
              ✗ Ignored
            </span>
            <button
              onClick={handleUnignore}
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors"
            >
              Undo
            </button>
          </div>
        ) : (
          <button
            onClick={handleApprove}
            disabled={saving}
            className="text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors"
          >
            {saving ? 'Saving…' : 'Approve'}
          </button>
        )}
      </div>
    </div>
  )
}
