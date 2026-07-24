import { useState, useEffect } from 'react'
import { getReportCounts } from '../api/client'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const SERVICES = [
  { key: 'vald', label: 'VALD', logo: '/VALD-automator/VALD.png' },
  { key: 'bodydot', label: 'Bodydot', logo: '/VALD-automator/Bodydot.png' },
]

export default function QuickReport() {
  const now = new Date()
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [year, setYear] = useState(now.getFullYear())
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    getReportCounts(year, month)
      .then((res) => { if (!cancelled) setData(res.data) })
      .catch((e) => { if (!cancelled) setError(e.response?.data?.detail || e.message) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [year, month])

  const gyms = data?.gyms || ['Body Motions', 'Body Masters']
  const rowTotal = (svc) => gyms.reduce((s, g) => s + (data?.[svc]?.[g] || 0), 0)
  const colTotal = (g) => SERVICES.reduce((s, svc) => s + (data?.[svc.key]?.[g] || 0), 0)
  const grandTotal = SERVICES.reduce((s, svc) => s + rowTotal(svc.key), 0)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Quick Report</h1>
        <p className="text-sm text-gray-500 mt-1">
          Tests dispatched in {MONTHS[month - 1]} {year} that would appear in each report.
        </p>
      </div>

      {/* Month / Year */}
      <div className="grid grid-cols-2 gap-4 max-w-sm">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Month</label>
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            {MONTHS.map((m, i) => (<option key={i + 1} value={i + 1}>{m}</option>))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            {[now.getFullYear() - 1, now.getFullYear(), now.getFullYear() + 1].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Counts table */}
      <div className={`rounded-xl border border-gray-700 overflow-hidden transition-opacity ${loading ? 'opacity-50' : ''}`}>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-800/70 text-gray-400">
              <th className="text-left font-medium px-5 py-3">Service</th>
              {gyms.map((g) => (
                <th key={g} className="text-right font-medium px-5 py-3">{g}</th>
              ))}
              <th className="text-right font-semibold px-5 py-3 text-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {SERVICES.map((svc) => (
              <tr key={svc.key} className="border-t border-gray-800">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center h-7 w-14 rounded bg-gray-100">
                      <img src={svc.logo} alt={svc.label} className="h-6 w-auto object-contain px-0.5" />
                    </span>
                    <span className="text-white font-medium">{svc.label}</span>
                  </div>
                </td>
                {gyms.map((g) => (
                  <td key={g} className="text-right px-5 py-3 text-gray-200 tabular-nums">
                    {data?.[svc.key]?.[g] ?? '—'}
                  </td>
                ))}
                <td className="text-right px-5 py-3 font-semibold text-white tabular-nums">{rowTotal(svc.key)}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-gray-700 bg-gray-800/40">
              <td className="px-5 py-3 font-semibold text-gray-300">Total</td>
              {gyms.map((g) => (
                <td key={g} className="text-right px-5 py-3 font-semibold text-white tabular-nums">{colTotal(g)}</td>
              ))}
              <td className="text-right px-5 py-3 font-bold text-brand-300 tabular-nums text-base">{grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
