import programTemplate from './program.html?raw'

// Absolute base for the program's assets (logo + backgrounds live in public/bodydot/).
const ASSETS_BASE = `${window.location.origin}${import.meta.env.BASE_URL}bodydot/`

// Build the standalone program document for a session and open it in a new tab
// (it auto-prints via its own bootstrap). Same pattern as the original flow.
export function openProgram(session, clientName, bilingual) {
  const payload = { session, clientName, lang: bilingual ? 'bilingual' : 'en', autoPrint: true }
  const charset = '<meta charset="UTF-8">'
  const inject =
    `<base href="${ASSETS_BASE}">` +
    `<script>window.__BODYDOT__ = ${JSON.stringify(payload)};</script>`
  const html = programTemplate.replace(charset, `${charset}${inject}`)
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const w = window.open(url, '_blank')
  if (!w) {
    URL.revokeObjectURL(url)
    throw new Error('Popup blocked — allow popups for this site and try again.')
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000)
}
