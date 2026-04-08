import { useState } from 'react'
import CheckDropzone from '../components/CheckDropzone'
import ProgramCard from '../components/ProgramCard'
import { checkFile } from '../api/client'

const GYMS = ['Body Motions', 'Body Masters']

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
      <div className="flex gap-2 flex-wrap items-center">
        {GYMS.map((g) => (
          <button
            key={g}
            onClick={() => { setGym(g); setResults(null) }}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors
              ${gym === g
                ? 'bg-brand-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
          >
            {g}
          </button>
        ))}
        <div className="ml-auto flex gap-2">
          {['upper', 'lower', 'full'].map((tt) => (
            <a
              key={tt}
              href={`${import.meta.env.VITE_API_BASE || 'https://vald-automator.onrender.com'}/api/programs/preview-demo?gym=${encodeURIComponent(gym)}&test_type=${tt}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-colors"
            >
              {tt.charAt(0).toUpperCase() + tt.slice(1)} template
            </a>
          ))}
        </div>
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
