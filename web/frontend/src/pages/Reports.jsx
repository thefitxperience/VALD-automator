import { useState } from 'react'
import { generateReport } from '../api/client'

const GYMS = [
  { name: 'Body Motions', logo: '/VALD-automator/Motions_logo.png' },
  { name: 'Body Masters', logo: '/VALD-automator/Masters_logo.png' },
]
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

function weeksInMonth(year, month) {
  // month is 1-based
  const firstDay = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  return Math.ceil((firstDay + daysInMonth) / 7)
}

export default function Reports() {
  const now = new Date()
  const [gym, setGym] = useState('Body Motions')
  const [periodType, setPeriodType] = useState('monthly')
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [weekNumber, setWeekNumber] = useState(1)
  const [startDay, setStartDay] = useState(null)
  const [endDay, setEndDay] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const daysInMonth = new Date(year, month, 0).getDate()
  const totalWeeks = weeksInMonth(year, month)

  // Determine if selected period is in the future
  const isFuture = (() => {
    const todayYear = now.getFullYear()
    const todayMonth = now.getMonth() + 1
    if (year > todayYear) return true
    if (year < todayYear) return false
    if (month > todayMonth) return true
    if (month < todayMonth) return false
    // Same month — for weekly, check if week start is after today
    if (periodType === 'weekly') {
      const weekStart = (weekNumber - 1) * 7 + 1
      return weekStart > now.getDate()
    }
    return false
  })()

  const handleGenerate = async () => {
    setLoading(true)
    setError(null)
    try {
      const params = {
        gym,
        period_type: periodType,
        year,
        month,
        week_number: periodType === 'weekly' ? weekNumber : null,
        start_day: periodType === 'monthly' && startDay ? startDay : null,
        end_day: periodType === 'monthly' && endDay ? endDay : null,
      }
      const res = await generateReport(params)

      // Trigger download
      const blob = new Blob([res.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      const disposition = res.headers?.['content-disposition'] || ''
      const match = disposition.match(/filename="([^"]+)"/)
      const label =
        periodType === 'monthly'
          ? startDay || endDay
            ? `${MONTHS[month - 1]} ${year} (Day ${startDay || 1}–${endDay || daysInMonth})`
            : `${MONTHS[month - 1]} ${year}`
          : `Week ${weekNumber} - ${MONTHS[month - 1]} ${year}`
      a.href = url
      a.download = match ? match[1] : `${label} - ${gym}.xlsx`
      a.click()
      URL.revokeObjectURL(url)
    } catch (e) {
      setError(e.response?.data?.detail || e.message || 'Failed to generate report')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-white">Reports</h1>

      {/* Gym */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">Gym</label>
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
      </div>

      {/* Period type */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">Report Type</label>
        <div className="flex gap-2">
          {['monthly', 'weekly'].map((pt) => (
            <button
              key={pt}
              onClick={() => setPeriodType(pt)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors
                ${periodType === pt
                  ? 'bg-brand-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
            >
              {pt}
            </button>
          ))}
        </div>
      </div>

      {/* Year + Month */}
      <div className="grid grid-cols-2 gap-4">
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
        <div>
          <label className="block text-sm text-gray-400 mb-1">Month</label>
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            {MONTHS.map((m, i) => (
              <option key={i + 1} value={i + 1}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Date range (only for monthly) */}
      {periodType === 'monthly' && (
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Date Range <span className="text-gray-600">(optional — defaults to full month)</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Start Day</label>
              <select
                value={startDay || ''}
                onChange={(e) => setStartDay(e.target.value ? Number(e.target.value) : null)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
              >
                <option value="">1 (default)</option>
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">End Day</label>
              <select
                value={endDay || ''}
                onChange={(e) => setEndDay(e.target.value ? Number(e.target.value) : null)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
              >
                <option value="">{daysInMonth} (default)</option>
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Week (only for weekly) */}
      {periodType === 'weekly' && (
        <div>
          <label className="block text-sm text-gray-400 mb-2">Week</label>
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: totalWeeks }, (_, i) => i + 1).map((w) => (
              <button
                key={w}
                onClick={() => setWeekNumber(w)}
                className={`w-12 h-10 rounded-lg text-sm font-semibold transition-colors
                  ${weekNumber === w
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
              >
                W{w}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Week {weekNumber}: days {(weekNumber - 1) * 7 + 1}–{Math.min(weekNumber * 7, new Date(year, month, 0).getDate())}
          </p>
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={loading || isFuture}
        className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors"
      >
        {loading ? 'Generating…' : 'Generate & Download Report'}
      </button>

      {isFuture && (
        <p className="text-xs text-amber-500 text-center">
          Cannot generate a report for a future period.
        </p>
      )}

      <p className="text-xs text-gray-500 text-center">
        Report pulls all <strong className="text-gray-400">approved</strong> programs
        {periodType === 'monthly'
          ? ` dispatched in ${MONTHS[month - 1]} ${year}`
          : ` dispatched in week ${weekNumber} of ${MONTHS[month - 1]} ${year}`
        }.
      </p>
    </div>
  )
}
