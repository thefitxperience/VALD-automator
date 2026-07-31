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

// Month-over-month change indicator. `compact` hides the % (used inside table cells).
function Delta({ curr, prev, compact = false }) {
  const d = curr - prev
  if (d === 0) {
    return <span className="text-gray-600">— {compact ? '' : 'no change'}</span>
  }
  const up = d > 0
  const color = up ? 'text-emerald-400' : 'text-red-400'
  const pct = prev > 0 ? Math.round((d / prev) * 100) : null
  const pctLabel = pct === null ? 'new' : `${pct > 0 ? '+' : ''}${pct}%`
  return (
    <span className={color}>
      {up ? '▲' : '▼'} {Math.abs(d)}
      {!compact && <span className="text-gray-500"> ({pctLabel})</span>}
    </span>
  )
}

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
  const prev = data?.prev || {}
  const prevLabel = data?.prev ? `${MONTHS[data.prev.month - 1]} ${data.prev.year}` : 'last month'

  // Totals over a source object shaped like { vald: {gym: n}, bodydot: {gym: n} }.
  const rowTotal = (svc, from) => gyms.reduce((s, g) => s + (from?.[svc]?.[g] || 0), 0)
  const colTotal = (g, from) => SERVICES.reduce((s, svc) => s + (from?.[svc.key]?.[g] || 0), 0)
  const grand = (from) => SERVICES.reduce((s, svc) => s + rowTotal(svc.key, from), 0)

  const tiles = [
    { label: 'Total tests', curr: grand(data), prev: grand(prev) },
    ...SERVICES.map((svc) => ({ label: svc.label, curr: rowTotal(svc.key, data), prev: rowTotal(svc.key, prev) })),
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Quick Report</h1>
        <p className="text-sm text-gray-500 mt-1">
          Tests dispatched in {MONTHS[month - 1]} {year} that would appear in each report,
          <span className="text-gray-400"> compared to {prevLabel}</span>.
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

      {/* Headline stat tiles with month-over-month change */}
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-opacity ${loading ? 'opacity-50' : ''}`}>
        {tiles.map((t) => (
          <div key={t.label} className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-4">
            <div className="text-xs uppercase tracking-wide text-gray-500">{t.label}</div>
            <div className="mt-1 text-3xl font-bold text-white tabular-nums">{t.curr}</div>
            <div className="mt-1 text-sm">
              <Delta curr={t.curr} prev={t.prev} />
              <span className="text-gray-600 text-xs"> vs {prevLabel}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Counts table with per-cell change */}
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
              <tr key={svc.key} className="border-t border-gray-800 align-top">
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
                    <div>{data?.[svc.key]?.[g] ?? '—'}</div>
                    <div className="text-xs mt-0.5">
                      <Delta curr={data?.[svc.key]?.[g] || 0} prev={prev?.[svc.key]?.[g] || 0} compact />
                    </div>
                  </td>
                ))}
                <td className="text-right px-5 py-3 font-semibold text-white tabular-nums">
                  <div>{rowTotal(svc.key, data)}</div>
                  <div className="text-xs mt-0.5 font-normal">
                    <Delta curr={rowTotal(svc.key, data)} prev={rowTotal(svc.key, prev)} compact />
                  </div>
                </td>
              </tr>
            ))}
            <tr className="border-t-2 border-gray-700 bg-gray-800/40 align-top">
              <td className="px-5 py-3 font-semibold text-gray-300">Total</td>
              {gyms.map((g) => (
                <td key={g} className="text-right px-5 py-3 font-semibold text-white tabular-nums">
                  <div>{colTotal(g, data)}</div>
                  <div className="text-xs mt-0.5 font-normal">
                    <Delta curr={colTotal(g, data)} prev={colTotal(g, prev)} compact />
                  </div>
                </td>
              ))}
              <td className="text-right px-5 py-3 font-bold text-brand-300 tabular-nums text-base">
                <div>{grand(data)}</div>
                <div className="text-xs mt-0.5 font-normal">
                  <Delta curr={grand(data)} prev={grand(prev)} compact />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-600">
        ▲ up / ▼ down vs {prevLabel}. Counts are approved, non-ignored records dispatched in the month.
      </p>
    </div>
  )
}
