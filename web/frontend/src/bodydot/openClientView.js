import clientViewTemplate from './client-view.html?raw'

// Gyms that get the Client View button. Body Coach only for now; add 'Body Masters' /
// 'Body Motions' here to switch it on for them.
export const CLIENT_VIEW_GYMS = ['Body Coach']
export const clientViewEnabled = (gym) => CLIENT_VIEW_GYMS.includes(gym)

// Same asset base as the trainer program: logos live in public/bodydot/assets/.
const ASSETS_BASE = `${window.location.origin}${import.meta.env.BASE_URL}bodydot/`

// Open the client-facing posture assessment (one A4 page, no exercises) for a Bodydot
// session in a new tab. It prints itself once rendered, like the trainer program.
export function openClientView(session, clientName) {
  const payload = { session, clientName, autoPrint: true }
  const charset = '<meta charset="UTF-8">'
  const inject =
    `<base href="${ASSETS_BASE}">` +
    `<script>window.__BODYDOT__ = ${JSON.stringify(payload).replace(/</g, '\\u003c')};</script>`
  const html = clientViewTemplate.replace(charset, `${charset}${inject}`)
  const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }))
  const w = window.open(url, '_blank')
  if (!w) {
    URL.revokeObjectURL(url)
    throw new Error('Popup blocked — allow popups for this site and try again.')
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000)
}
