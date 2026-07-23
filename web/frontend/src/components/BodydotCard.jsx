import { useState, useEffect } from 'react'
import SearchableSelect from './SearchableSelect'
import { getSession } from '../api/bodydot'
import { openProgram } from '../bodydot/openProgram'
import { approveBodydotTest, ignoreBodydotTest, patchBodydotTest, getTrainerWhatsapp } from '../api/client'

// A New (unapproved) Bodydot test — laid out like the VALD ProgramCard, minus branch.
export default function BodydotCard({ test, org, roster, onStatus, picker }) {
  const copyBtn = (
    <button
      onClick={() => navigator.clipboard.writeText(test.client_name || '')}
      title="Copy client name"
      className="text-gray-600 hover:text-gray-300 transition-colors p-1 rounded"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    </button>
  )
  const stored = test.stored || {}
  const [trainer, setTrainer] = useState(stored.trainer_name || '')
  const [dispatchDate, setDispatchDate] = useState(
    stored.dispatch_date || new Date().toISOString().slice(0, 10)
  )
  const [busy, setBusy] = useState(false)
  const [opening, setOpening] = useState(false)
  const [whatsappNum, setWhatsappNum] = useState('')

  // WhatsApp number for a roster trainer at this gym's branch.
  useEffect(() => {
    if (org.gym && org.branch && trainer) {
      getTrainerWhatsapp(org.gym, org.branch, trainer)
        .then((r) => setWhatsappNum(r.data?.whatsapp || ''))
        .catch(() => setWhatsappNum(''))
    } else {
      setWhatsappNum('')
    }
  }, [org.gym, org.branch, trainer])

  const commonRecord = () => ({
    gym: org.gym,
    org_id: org.id,
    client_id: test.client_id,
    client_name: test.client_name || '',
    session_id: test.session_id,
    test_date: test.test_date,
    valid: test.valid,
  })

  const handleApprove = async () => {
    setBusy(true)
    try {
      const { data } = await approveBodydotTest({
        ...commonRecord(),
        trainer_name: trainer.trim() || null,
        dispatch_date: dispatchDate || null,
        sent: stored.sent || false,
      })
      onStatus(test.session_id, data)
    } catch (e) {
      alert('Error approving: ' + (e.response?.data?.detail || e.message))
    } finally {
      setBusy(false)
    }
  }

  const handleIgnore = async () => {
    setBusy(true)
    try {
      const { data } = await ignoreBodydotTest(commonRecord())
      onStatus(test.session_id, data)
    } catch (e) {
      alert('Error ignoring: ' + (e.response?.data?.detail || e.message))
    } finally {
      setBusy(false)
    }
  }

  const handleOpen = async () => {
    setOpening(true)
    try {
      const session = await getSession(test.client_id, test.session_id)
      openProgram(session, test.client_name || '', org.bilingual)
    } catch (e) {
      alert('Could not open program: ' + e.message)
    } finally {
      setOpening(false)
    }
  }

  const openWhatsapp = () => {
    if (!whatsappNum) { alert('No WhatsApp number set for this trainer.'); return }
    window.open(`https://wa.me/${whatsappNum.replace(/\D/g, '')}`, '_blank')
  }

  // Approve an invalid test (no trainer/dispatch) so it's recorded for the report.
  const handleApproveInvalid = async () => {
    setBusy(true)
    try {
      const { data } = await approveBodydotTest({ ...commonRecord(), trainer_name: null, dispatch_date: null, sent: false })
      onStatus(test.session_id, data)
    } catch (e) {
      alert('Error approving: ' + (e.response?.data?.detail || e.message))
    } finally {
      setBusy(false)
    }
  }

  // Invalid tests can't be assigned/generated, but can be approved so the report
  // (which reads the DB) counts them.
  if (!test.valid) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-red-950/10 px-5 py-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800">
              INVALID
            </span>
            <h3 className="font-semibold text-white truncate">{test.client_name || '—'}</h3>
          </div>
          <p className="text-xs mt-0.5 text-gray-500">{test.analyzed}/{test.total} analyzed</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {picker}
          {copyBtn}
          <button
            onClick={handleApproveInvalid}
            disabled={busy}
            className="text-xs px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors"
          >
            {busy ? '…' : 'Approve'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700">
              NEW
            </span>
            <h3 className="font-semibold text-white">{test.client_name || '—'}</h3>
          </div>
          <div className="mt-1 flex flex-wrap gap-3 text-sm text-gray-400">
            <span>VALID</span>
            <span>·</span>
            <span>{test.analyzed}/{test.total}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {picker}
          {copyBtn}
        </div>
      </div>

      {/* Assignment row (no branch — Bodydot is one branch per gym) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Trainer</label>
          <SearchableSelect
            options={roster}
            value={trainer}
            onChange={setTrainer}
            placeholder="Search or type a name…"
            allowCustom
            disabled={busy}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Dispatch Date</label>
          <input
            type="date"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
            value={dispatchDate}
            onChange={(e) => setDispatchDate(e.target.value)}
            disabled={busy}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 items-center">
        <button
          onClick={handleOpen}
          disabled={opening}
          className="text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors"
        >
          {opening ? 'Loading…' : '🖨 Open & Print'}
        </button>
        <button
          onClick={handleIgnore}
          disabled={busy}
          className="text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors"
        >
          Ignore
        </button>

        <div className="flex-1" />

        <button
          onClick={openWhatsapp}
          disabled={!whatsappNum}
          title={!whatsappNum ? 'No WhatsApp number for this trainer' : ''}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp
        </button>
        <button
          onClick={handleApprove}
          disabled={busy}
          className="text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors"
        >
          {busy ? 'Saving…' : 'Approve'}
        </button>
      </div>
    </div>
  )
}
