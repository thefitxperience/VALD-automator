import { useState, useEffect } from 'react'
import { getBranches, getTrainers } from '../data/trainers'
import { listTrainerOverrides, upsertTrainerOverride, deleteTrainerOverride } from '../api/client'

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
  const [overrides, setOverrides] = useState([])   // DB records: { id, gym, branch, trainer_name, whatsapp }
  const [loading, setLoading] = useState(false)

  // New trainer form
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [adding, setAdding] = useState(false)

  const branches = getBranches(gym)

  // When gym changes reset branch
  useEffect(() => {
    setBranch('')
    setOverrides([])
  }, [gym])

  // Load overrides whenever branch changes
  useEffect(() => {
    if (!branch) { setOverrides([]); return }
    setLoading(true)
    listTrainerOverrides(gym, branch)
      .then((r) => setOverrides(r.data || []))
      .catch(() => setOverrides([]))
      .finally(() => setLoading(false))
  }, [gym, branch])

  const staticTrainers = branch ? getTrainers(gym, branch) : []

  // Overrides for this branch that are NOT in the static list = "added" trainers
  const addedTrainers = overrides.filter(
    (o) => !staticTrainers.includes(o.trainer_name)
  )

  // Map trainer name → override record
  const overrideByName = Object.fromEntries(overrides.map((o) => [o.trainer_name, o]))

  const handleSaved = (newRecord) => {
    setOverrides((prev) => {
      const idx = prev.findIndex((o) => o.id === newRecord.id || o.trainer_name === newRecord.trainer_name)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = newRecord
        return next
      }
      return [...prev, newRecord]
    })
  }

  const handleDeleted = (id) => {
    setOverrides((prev) => prev.filter((o) => o.id !== id))
  }

  const handleAddTrainer = async () => {
    if (!newName.trim()) return
    if (staticTrainers.includes(newName.trim())) {
      alert(`"${newName.trim()}" already exists in the static list for this branch. Edit their number directly in the row above.`)
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
              {/* Existing trainers */}
              {staticTrainers.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Trainers ({staticTrainers.length + addedTrainers.length})
                  </p>
                  {[...staticTrainers, ...addedTrainers.map((o) => o.trainer_name)].map((name) => {
                    const ov = overrideByName[name]
                    const isNew = !staticTrainers.includes(name)
                    return (
                      <TrainerRow
                        key={name}
                        gym={gym}
                        branch={branch}
                        name={name}
                        initialNumber={ov?.whatsapp || ''}
                        overrideId={ov?.id || null}
                        isNew={isNew}
                        onSaved={handleSaved}
                        onDeleted={handleDeleted}
                      />
                    )
                  })}
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
