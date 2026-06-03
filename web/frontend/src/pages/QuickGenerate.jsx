import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { quickGenerate, previewHtml } from '../api/client'

const GYMS = [
  { name: 'Body Motions', logo: '/VALD-automator/Motions_logo.png' },
  { name: 'Body Masters', logo: '/VALD-automator/Masters_logo.png' },
]

const TYPE_LABEL = { upper: 'Upper Body', lower: 'Lower Body', full: 'Full Body' }

function QuickCard({ item, gym }) {
  const [opening, setOpening] = useState(false)

  const handleOpen = async () => {
    setOpening(true)
    try {
      const res = await previewHtml({
        gym,
        test_type: item.test_type,
        patient_name: item.patient,
        test_date: item.date,
        cells_data: item.cells_data,
        prev_asymmetries: null,
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

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold text-white">{item.patient}</p>
        <p className="text-sm text-gray-400 mt-0.5">
          {TYPE_LABEL[item.test_type] || item.test_type}
          <span className="mx-1.5 text-gray-600">·</span>
          {item.movement_count} movements
          <span className="mx-1.5 text-gray-600">·</span>
          {item.date}
        </p>
      </div>
      <button
        onClick={handleOpen}
        disabled={opening}
        className="shrink-0 text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors"
      >
        {opening ? 'Loading…' : '🖨 Open & Print'}
      </button>
    </div>
  )
}

export default function QuickGenerate() {
  const [gym, setGym] = useState('Body Motions')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState(null)

  const onDrop = async (accepted) => {
    if (!accepted.length) return
    setLoading(true)
    setError(null)
    setResults(null)
    try {
      const res = await quickGenerate(gym, accepted[0])
      setResults(res.data)
    } catch (e) {
      setError(e.response?.data?.detail || e.message || 'Failed to process file')
    } finally {
      setLoading(false)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel.sheet.macroEnabled.12': ['.xlsm'],
      'application/vnd.ms-excel': ['.xls'],
    },
    multiple: false,
    disabled: loading,
  })

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Quick Generate</h1>

      {/* Gym selector */}
      <div className="flex gap-3">
        {GYMS.map((g) => (
          <button
            key={g.name}
            onClick={() => { setGym(g.name); setResults(null) }}
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

      {/* Drop zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-brand-500 bg-brand-900/20' : 'border-gray-700 hover:border-gray-500'}
          ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="text-4xl mb-3">📂</div>
        {loading ? (
          <p className="text-gray-400">Generating programs…</p>
        ) : isDragActive ? (
          <p className="text-brand-400 font-medium">Drop it here</p>
        ) : (
          <>
            <p className="text-gray-300 font-medium">Drop your VALD export file here</p>
            <p className="text-gray-500 text-sm mt-1">or click to browse (.xlsx / .xlsm)</p>
          </>
        )}
      </div>

      {error && (
        <div className="rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {results !== null && (
        <div className="space-y-3">
          <p className="text-sm text-gray-400">
            <span className="font-bold text-white">{results.length}</span> program{results.length !== 1 ? 's' : ''} found
          </p>
          {results.length === 0 && (
            <p className="text-gray-500 text-sm">No programs could be parsed from this file.</p>
          )}
          {results.map((item, i) => (
            <QuickCard key={i} item={item} gym={gym} />
          ))}
        </div>
      )}
    </div>
  )
}
