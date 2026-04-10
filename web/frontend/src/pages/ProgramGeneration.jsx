import { useState } from 'react'
import CheckDropzone from '../components/CheckDropzone'
import ProgramCard from '../components/ProgramCard'
import { checkFile } from '../api/client'

const GYMS = [
  { name: 'Body Motions', logo: '/VALD-automator/Motions_logo.png' },
  { name: 'Body Masters', logo: '/VALD-automator/Masters_logo.png' },
]

export default function ProgramGeneration() {
  const [gym, setGym] = useState('Body Motions')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState(null)

  const handleFile = async (file) => {
    setLoading(true)
    setError(null)
    setResults(null)
    try {
      const res = await checkFile(gym, file)
      setResults(res.data)
    } catch (e) {
      setError(e.response?.data?.detail || e.message || 'Failed to process file')
    } finally {
      setLoading(false)
    }
  }

  const newTests     = results?.filter((t) => t.status === 'NEW')     || []
  const updatedTests = results?.filter((t) => t.status === 'UPDATED') || []

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Program Generation</h1>

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

      {/* Upload area */}
      <CheckDropzone onFile={handleFile} loading={loading} />

      {error && (
        <div className="rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {results !== null && (
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-300">
              <span className="font-bold text-emerald-400">{newTests.length}</span> new
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">
              <span className="font-bold text-amber-400">{updatedTests.length}</span> updated
            </span>
            {results.length === 0 && (
              <span className="text-gray-500">No new or updated tests found.</span>
            )}
          </div>

          {/* NEW */}
          {newTests.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-emerald-400 border-b border-emerald-900 pb-1">
                New Tests ({newTests.length})
              </h2>
              {newTests.map((t, i) => (
                <ProgramCard key={`new-${i}`} test={t} gym={gym} />
              ))}
            </section>
          )}

          {/* UPDATED */}
          {updatedTests.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-amber-400 border-b border-amber-900 pb-1">
                Updated Tests ({updatedTests.length})
              </h2>
              {updatedTests.map((t, i) => (
                <ProgramCard key={`upd-${i}`} test={t} gym={gym} />
              ))}
            </section>
          )}
        </div>
      )}
    </div>
  )
}
