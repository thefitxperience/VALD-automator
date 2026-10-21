import clientViewTemplate from './client-view.html?raw'
import { listSessions, getSession, sessionValidity } from '../api/bodydot'

// Gyms that get the Client View button. Body Coach only for now; add 'Body Masters' /
// 'Body Motions' here to switch it on for them.
export const CLIENT_VIEW_GYMS = ['Body Coach']
export const clientViewEnabled = (gym) => CLIENT_VIEW_GYMS.includes(gym)

// Same asset base as the trainer program: logos live in public/bodydot/assets/.
const ASSETS_BASE = `${window.location.origin}${import.meta.env.BASE_URL}bodydot/`

// How many older sessions to open while looking for a valid one (each is one API call).
const MAX_PREVIOUS_CHECKED = 10

// The client's latest valid session from an earlier day than `session`, or null when this is
// their first valid assessment. Same-day sessions are re-takes, not progress, so they are skipped.
async function previousValidSession(clientId, session) {
  const day = String(session.createdAt).slice(0, 10)
  const older = (await listSessions(clientId))               // newest first
    .filter((s) => s.id !== session.id && String(s.createdAt).slice(0, 10) < day)
    .slice(0, MAX_PREVIOUS_CHECKED)
  for (const s of older) {
    const full = await getSession(clientId, s.id)
    if (sessionValidity(full).valid) return full
  }
  return null
}

// Open the client-facing posture assessment (one A4 page, no exercises) for a Bodydot
// session in a new tab, compared with the client's previous valid assessment when there is
// one. It prints itself once rendered, like the trainer program.
export async function openClientView(clientId, sessionId, clientName) {
  // Open the tab now, while the click still counts as a user gesture; the sessions load after.
  const w = window.open('', '_blank')
  if (!w) throw new Error('Popup blocked — allow popups for this site and try again.')
  w.document.write('<p style="font-family:sans-serif;padding:40px;color:#122649">Preparing the client summary…</p>')
  try {
    const session = await getSession(clientId, sessionId)
    const previousSession = await previousValidSession(clientId, session)
    const payload = { session, previousSession, clientName, autoPrint: true }
    const charset = '<meta charset="UTF-8">'
    const inject =
      `<base href="${ASSETS_BASE}">` +
      `<script>window.__BODYDOT__ = ${JSON.stringify(payload).replace(/</g, '\\u003c')};</script>`
    const html = clientViewTemplate.replace(charset, `${charset}${inject}`)
    const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }))
    w.location.href = url
    setTimeout(() => URL.revokeObjectURL(url), 60000)
  } catch (e) {
    w.close()
    throw e
  }
}
