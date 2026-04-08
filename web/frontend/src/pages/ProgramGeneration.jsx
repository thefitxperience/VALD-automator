import { useState, useCallback } from 'react'
import CheckDropzone from '../components/CheckDropzone'
import ProgramCard from '../components/ProgramCard'
import { checkFile } from '../api/client'

const GYMS = ['Body Motions', 'Body Masters']

// Parse a results PDF filename into a map key
// Expected pattern: "Patient Name - Full Body.pdf" → { patient, type }
function parseResultsFilename(filename) {
  const noExt = filename.replace(/\.pdf$/i, '')
  const parts = noExt.split(' - ')
  if (parts.length < 2) return null
  const patient = parts.slice(0, parts.length - 1).join(' - ').trim()
  const typeRaw = parts[parts.length - 1].trim().toLowerCase()
  const typeMap = {
    'full body': 'full',
    'upper body': 'upper',
    'lower body': 'lower',
  }
  const type = typeMap[typeRaw]
  if (!type) return null
  return { patient, type, key: `${patient}|${type}` }
}

export default function ProgramGeneration() {
  const [gym, setGym] = useState('Body Motions')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState(null)

  // Map of "PatientName|testType" → File for bulk results PDFs
  const [resultsPdfsMap, setResultsPdfsMap] = useState({})
  const [bulkDragOver, setBulkDragOver] = useState(false)

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

  const handleBulkResults = useCallback((files) => {
    const newMap = {}
    for (const file of files) {
      const parsed = parseResultsFilename(file.name)
      if (parsed) newMap[parsed.key] = file
    }
    setResultsPdfsMap((prev) => ({ ...prev, ...newMap }))
  }, [])

  const onBulkDrop = (e) => {
    e.preventDefault()
    setBulkDragOver(false)
    const files = Array.from(e.dataTransfer.files).filter((f) => f.name.endsWith('.pdf'))
    if (files.length) handleBulkResults(files)
  }

  const newTests     = results?.filter((t) => t.status === 'NEW')     || []
  const updatedTests = results?.filter((t) => t.status === 'UPDATED') || []

  const matchedCount = results
    ? results.filter((t) => resultsPdfsMap[`${t.patient}|${t.test_type}`]).length
    : 0

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Program Generation</h1>

      {/* Gym selector */}
      <div className="flex gap-2">
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
      </div>

      {/* Upload areas — side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Check file */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Check File
          </label>
          <CheckDropzone onFile={handleFile} loading={loading} />
        </div>

        {/* Bulk results PDFs */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            Bulk Results PDFs
            <span className="ml-2 text-gray-600 normal-case font-normal">
              "Patient Name - Full Body.pdf"
            </span>
          </label>
          <div
            onDragOver={(e) => { e.preventDefault(); setBulkDragOver(true) }}
            onDragLeave={() => setBulkDragOver(false)}
            onDrop={onBulkDrop}
            className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 text-center cursor-pointer transition-colors
              ${bulkDragOver
                ? 'border-emerald-500 bg-emerald-900/10'
                : Object.keys(resultsPdfsMap).length > 0
                  ? 'border-emerald-700 bg-emerald-950/20'
                  : 'border-gray-700 bg-gray-900 hover:border-gray-500'
              }`}
          >
            <input
              type="file" accept=".pdf" multiple className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => handleBulkResults(Array.from(e.target.files))}
            />
            {Object.keys(resultsPdfsMap).length === 0 ? (
              <>
                <p className="text-sm text-gray-400">Drop results PDFs here</p>
                <p className="text-xs text-gray-600 mt-1">or click to browse</p>
              </>
            ) : (
              <>
                <p className="text-sm text-emerald-400 font-medium">
                  {Object.keys(resultsPdfsMap).length} results PDF{Object.keys(resultsPdfsMap).length !== 1 ? 's' : ''} loaded
                </p>
                {results && (
                  <p className="text-xs text-gray-400 mt-1">
                    {matchedCount} of {results.length} tests matched
                  </p>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); setResultsPdfsMap({}) }}
                  className="mt-2 text-xs text-gray-500 hover:text-red-400 transition-colors"
                >
                  Clear
                </button>
              </>
            )}
          </div>
        </div>
      </div>

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
            {matchedCount > 0 && (
              <>
                <span className="text-gray-600">|</span>
                <span className="text-gray-300">
                  <span className="font-bold text-emerald-300">{matchedCount}</span> with results PDF
                </span>
              </>
            )}
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
                <ProgramCard
                  key={`new-${i}`} test={t} gym={gym}
                  injectedResultsPdf={resultsPdfsMap[`${t.patient}|${t.test_type}`] || null}
                />
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
                <ProgramCard
                  key={`upd-${i}`} test={t} gym={gym}
                  injectedResultsPdf={resultsPdfsMap[`${t.patient}|${t.test_type}`] || null}
                />
              ))}
            </section>
          )}
        </div>
      )}
    </div>
  )
}
