import { useState, useEffect } from 'react'
import { useTrainers } from '../context/TrainersContext'
import { addTrainer, updateTrainer, deleteTrainer } from '../api/client'

const GYMS = [
  { name: 'Body Motions', logo: '/VALD-automator/Motions_logo.png' },
  { name: 'Body Masters', logo: '/VALD-automator/Masters_logo.png' },
]

function TrainerRow({ trainer, allBranches, onUpdated, onDeleted }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(trainer.name)
  const [whatsapp, setWhatsapp] = useState(trainer.whatsapp || '')
  const [branch, setBranch] = useState(trainer.branch)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const dirty = name !== trainer.name || whatsapp !== (trainer.whatsapp || '') || branch !== trainer.branch

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await updateTrainer(trainer.id, { name, whatsapp, branch })
      onUpdated(res.data)
      setEditing(false)
    } catch (e) {
      alert('Failed to save: ' + (e.response?.data?.detail || e.message))
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm(`Delete "${trainer.name}"?`)) return
    setDeleting(true)
    try {
      await deleteTrainer(trainer.id)
      onDeleted(trainer.id)
    } catch (e) {
      alert('Failed to delete: ' + (e.response?.data?.detail || e.message))
      setDeleting(false)
    }
  }

  const handleCancel = () => {
    setName(trainer.name)
    setWhatsapp(trainer.whatsapp || '')
    setBranch(trainer.branch)
    setEditing(false)
  }

  if (!editing) {
    return (
      <div className="flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0 group">
        <span className="w-72 shrink-0 text-sm text-white">{trainer.name}</span>
        <span className="flex-1 text-sm text-gray-400">{trainer.whatsapp || <span className="text-gray-600 italic">no number</span>}</span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => setEditing(true)} className="text-xs px-2.5 py-1 rounded border border-gray-600 text-gray-300 hover:border-brand-500 hover:text-brand-300">
            Edit
          </button>
          <button onClick={handleDelete} disabled={deleting} className="text-xs px-2.5 py-1 rounded border border-gray-700 text-gray-500 hover:border-red-600 hover:text-red-400 disabled:opacity-40">
            {deleting ? '…' : 'Delete'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-3 border-b border-gray-700 space-y-2">
      <div className="flex gap-2 items-center">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"
          className="flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500" />
        <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp e.g. +966..."
          className="w-44 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500" />
      </div>
      <div className="flex gap-2 items-center">
        <select value={branch} onChange={(e) => setBranch(e.target.value)}
          className="flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500">
          {allBranches.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <button onClick={handleSave} disabled={saving || !dirty}
          className="px-3 py-1 text-xs rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40">
          {saving ? 'Saving…' : 'Save'}
        </button>
        <button onClick={handleCancel} className="px-3 py-1 text-xs rounded border border-gray-600 text-gray-400 hover:text-white">
          Cancel
        </button>
      </div>
    </div>
  )
}

function AddTrainerForm({ gym, branch, onAdded }) {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [saving, setSaving] = useState(false)

  const handleAdd = async () => {
    if (!name.trim()) return
    setSaving(true)
    try {
      const res = await addTrainer({ gym, branch, name: name.trim(), whatsapp })
      onAdded(res.data)
      setName('')
      setWhatsapp('')
    } catch (e) {
      alert('Failed to add: ' + (e.response?.data?.detail || e.message))
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex gap-2 pt-3 border-t border-gray-700 mt-1">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New trainer name"
        className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()} />
      <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp (optional)"
        className="w-44 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()} />
      <button onClick={handleAdd} disabled={saving || !name.trim()}
        className="px-4 py-1.5 text-sm rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40 shrink-0">
        {saving ? 'Adding…' : '+ Add'}
      </button>
    </div>
  )
}

export default function TrainerManager() {
  const { data, load, reload, getBranches } = useTrainers()
  const [gym, setGym] = useState('Body Motions')
  const [branch, setBranch] = useState('')

  useEffect(() => {
    load(gym)
  }, [gym])

  const branches = getBranches(gym)
  const trainers = branch ? [...(data[gym]?.[branch] || [])].sort((a, b) => a.name.localeCompare(b.name)) : []

  const handleUpdated = async (updated) => {
    // If branch changed, reload the whole gym data
    if (updated.branch !== branch) {
      await reload(gym)
      setBranch(updated.branch)
    } else {
      // Update in-place
      reload(gym)
    }
  }

  const handleDeleted = () => reload(gym)
  const handleAdded = () => reload(gym)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Trainers</h1>

      {/* Gym selector */}
      <div className="flex gap-3">
        {GYMS.map((g) => (
          <button key={g.name} onClick={() => { setGym(g.name); setBranch('') }}
            className={`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${gym === g.name ? 'border-brand-500 shadow-lg shadow-brand-500/30 scale-105' : 'border-transparent opacity-60 hover:opacity-90 hover:border-gray-500'}`}>
            <img src={g.logo} alt={g.name} className="h-14 w-auto object-contain px-3 py-1.5" />
          </button>
        ))}
      </div>

      {/* Branch selector */}
      <div>
        <label className="block text-xs text-gray-400 mb-1">Branch</label>
        <select value={branch} onChange={(e) => setBranch(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 w-72">
          <option value="">— Select branch —</option>
          {branches.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      {branch && (
        <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            {branch} — {trainers.length} trainer{trainers.length !== 1 ? 's' : ''}
          </p>
          {trainers.map((t) => (
            <TrainerRow
              key={t.id}
              trainer={{ ...t, branch }}
              allBranches={branches}
              onUpdated={handleUpdated}
              onDeleted={handleDeleted}
            />
          ))}
          <AddTrainerForm gym={gym} branch={branch} onAdded={handleAdded} />
        </div>
      )}
    </div>
  )
}
