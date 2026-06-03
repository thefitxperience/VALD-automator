import { useState, useEffect } from 'react'
import { getBranches } from '../data/trainers'
import { getTrainersFull, upsertTrainerOverride, deleteTrainerOverride } from '../api/client'

const GYMS = [
  { name: 'Body Motions', logo: '/VALD-automator/Motions_logo.png' },
  { name: 'Body Masters', logo: '/VALD-automator/Masters_logo.png' },
]

function TrainerRow({ gym, branch, name, initialNumber, overrideId, isNew, onSaved, onDeleted }) {
  const [number, setNumber] = useState(initialNumber || '')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [saved, setSaved] = useState(false)

  const dirty = number !== (initialNumber || '')

  const handleSave = async () => {
    setSaving(true)
    setSaved(false)
    try {
      const res = await upsertTrainerOverride({ gym, branch, trainer_name: name, whatsapp: number })
      onSaved(res.data)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) {
      alert('Failed to save: ' + (e.response?.data?.detail || e.message))
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!overrideId) return
    setDeleting(true)
    try {
      await deleteTrainerOverride(overrideId)
      onDeleted(overrideId)
    } catch (e) {
      alert('Failed to delete: ' + (e.response?.data?.detail || e.message))
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0">
      <div className="w-56 shrink-0">
        <span className="text-sm text-white">{name}</span>
        {isNew && (
          <span className="ml-2 text-xs bg-brand-900/60 text-brand-300 border border-brand-700 px-1.5 py-0.5 rounded-full">
            added
          </span>
        )}
      </div>
      <input
        type="tel"
        value={number}
        onChange={(e) => { setNumber(e.target.value); setSaved(false) }}
        placeholder="e.g. 966501234567"
        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 placeholder-gray-600"
        onKeyDown={(e) => e.key === 'Enter' && dirty && handleSave()}
      />
      {(dirty || saved) && (
        <button
          onClick={handleSave}
          disabled={saving || !dirty}
          className={`text-xs px-3 py-1.5 rounded-lg border transition-colors shrink-0 ${
            saved
              ? 'border-emerald-600 text-emerald-400 bg-emerald-950/30'
              : 'border-brand-600 text-brand-300 hover:bg-brand-900/40 disabled:opacity-50'
          }`}
        >
          {saving ? 'Saving…' : saved ? '✓ Saved' : 'Save'}
        </button>
      )}
      {isNew && overrideId && (
        <button
          onClick={handleDelete}
          disabled={deleting}
          title="Remove this trainer"
          className="text-xs px-2 py-1.5 rounded-lg border border-red-900 text-red-500 hover:border-red-600 hover:text-red-300 disabled:opacity-50 transition-colors shrink-0"
        >
          {deleting ? '…' : '✕'}
        </button>
      )}
    </div>
  )
}

export default function TrainerManager() {
  const [gym, setGym] = useState('Body Motions')
  const [branch, setBranch] = useState('')
  const [trainers, setTrainers] = useState([])   // [{name, whatsapp, override_id, is_static}]
  const [loading, setLoading] = useState(false)

  // New trainer form
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [adding, setAdding] = useState(false)

  const branches = getBranches(gym)

  // When gym changes reset branch
  useEffect(() => {
    setBranch('')
    setTrainers([])
  }, [gym])

  // Load trainers with numbers whenever branch changes
  useEffect(() => {
    if (!branch) { setTrainers([]); return }
    setLoading(true)
    getTrainersFull(gym, branch)
      .then((r) => setTrainers(r.data || []))
      .catch(() => setTrainers([]))
      .finally(() => setLoading(false))
  }, [gym, branch])

  const handleSaved = (newRecord) => {
    setTrainers((prev) => {
      const idx = prev.findIndex((t) => t.name === newRecord.trainer_name)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = {
          ...next[idx],
          whatsapp: newRecord.whatsapp,
          override_id: newRecord.id,
        }
        return next
      }
      // DB-only new trainer
      return [...prev, {
        name: newRecord.trainer_name,
        whatsapp: newRecord.whatsapp,
        override_id: newRecord.id,
        is_static: false,
      }]
    })
  }

  const handleDeleted = (id) => {
    setTrainers((prev) => prev.filter((t) => t.override_id !== id))
  }

  const handleAddTrainer = async () => {
    if (!newName.trim()) return
    if (trainers.some((t) => t.name === newName.trim())) {
      alert(`"${newName.trim()}" already exists in this branch. Edit their number directly in the list.`)
      return
    }
    setAdding(true)
    try {
      const res = await upsertTrainerOverride({
        gym,
        branch,
        trainer_name: newName.trim(),
        whatsapp: newNumber.trim(),
      })
      handleSaved(res.data)
      setNewName('')
      setNewNumber('')
    } catch (e) {
      alert('Failed to add trainer: ' + (e.response?.data?.detail || e.message))
    } finally {
      setAdding(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Trainers</h1>

      {/* Gym selector */}
      <div className="flex gap-3">
        {GYMS.map((g) => (
          <button
            key={g.name}
            onClick={() => setGym(g.name)}
            className={`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${gym === g.name
                ? 'border-brand-500 shadow-lg shadow-brand-500/30 scale-105'
                : 'border-transparent opacity-60 hover:opacity-90 hover:border-gray-500'
              }`}
          >
            <img src={g.logo} alt={g.name} className="h-14 w-auto object-contain px-3 py-1.5" />
          </button>
        ))}
      </div>

      {/* Branch selector */}
      <div>
        <label className="block text-xs text-gray-400 mb-1">Branch</label>
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 w-72"
        >
          <option value="">— Select branch —</option>
          {branches.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {branch && (
        <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 space-y-4">
          {loading ? (
            <p className="text-gray-500 text-sm">Loading…</p>
          ) : (
            <>
              {/* Trainer list */}
              {trainers.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Trainers ({trainers.length})
                  </p>
                  {trainers.map((t) => (
                    <TrainerRow
                      key={t.name}
                      gym={gym}
                      branch={branch}
                      name={t.name}
                      initialNumber={t.whatsapp}
                      overrideId={t.override_id}
                      isNew={!t.is_static}
                      onSaved={handleSaved}
                      onDeleted={handleDeleted}
                    />
                  ))}
                </div>
              )}

              {/* Add new trainer */}
              <div className="pt-3 border-t border-gray-800">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Add New Trainer
                </p>
                <div className="flex gap-2 items-center flex-wrap">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Trainer name"
                    className="flex-1 min-w-40 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 placeholder-gray-600"
                  />
                  <input
                    type="tel"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    placeholder="WhatsApp number (optional)"
                    className="flex-1 min-w-44 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 placeholder-gray-600"
                    onKeyDown={(e) => e.key === 'Enter' && newName.trim() && handleAddTrainer()}
                  />
                  <button
                    onClick={handleAddTrainer}
                    disabled={adding || !newName.trim()}
                    className="text-xs px-4 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors shrink-0"
                  >
                    {adding ? 'Adding…' : '+ Add'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
