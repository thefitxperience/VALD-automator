// Bodydot API Service (BAS) integration.
// Mirrors the original posture-form "Automated" flow: OAuth client-credentials token,
// list clients per organization, fetch a client's latest measurement session.
//
// Requests route through the deployed Cloudflare Worker CORS proxy. When running on
// localhost you can optionally point at a local `node proxy.js` (port 3001) by setting
// VITE_BODYDOT_API; otherwise the worker is always used.

const WORKER_URL = 'https://bdot-proxy.andyayas27.workers.dev'
export const BAS_API = import.meta.env.VITE_BODYDOT_API || `${WORKER_URL}/v1`

// Base64 of "<clientId>:<clientSecret>" for the Bodydot OAuth client.
// NOTE: this ships in the static bundle exactly as it did in the original public site.
const BAS_CREDS =
  'YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk'

// The three organizations exposed in the Automated page (id → display name).
// `bilingual: false` → English-only program (Body Coach), matching the original rule.
export const BODYDOT_ORGS = [
  { id: 'bf9ffaec-d3ed-4742-bce9-945f619ea1bc', name: 'Body Motions – Al Sahafa', bilingual: true },
  { id: '1627c00e-e275-4356-91ae-6f85127bd21c', name: 'Body Masters – Al Aarid', bilingual: true },
  { id: 'ebce917d-1c31-4516-8396-64283b4cbeaa', name: 'Body Coach', bilingual: false },
]

let _token = null
let _tokenExpiry = 0

async function getToken() {
  if (_token && Date.now() < _tokenExpiry - 60000) return _token
  const resp = await fetch(`${BAS_API}/oauth/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BAS_CREDS}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  if (!resp.ok) throw new Error(`Auth failed (HTTP ${resp.status})`)
  const data = await resp.json()
  _token = data.access_token
  _tokenExpiry = Date.now() + data.expires_in * 1000
  return _token
}

// List clients for an organization, sorted alphabetically by name.
export async function listClients(orgId) {
  const token = await getToken()
  const resp = await fetch(`${BAS_API}/clients?organizationId=${orgId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
  const data = await resp.json()
  const clients = Array.isArray(data) ? data : data.data || []
  clients.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
  return clients
}

// Cache of clientId → session summary list, so the background prefetch (for the
// row's test date + count) and the "Generate" click share a single list fetch.
const _listCache = new Map()

// List a client's measurement sessions (summaries: id + createdAt, no stepResults),
// newest first. A client can have several sessions on the same day.
export async function listSessions(clientId) {
  if (_listCache.has(clientId)) return _listCache.get(clientId)
  const token = await getToken()
  const resp = await fetch(`${BAS_API}/clients/${clientId}/measurement-sessions`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
  const data = await resp.json()
  const list = Array.isArray(data) ? data : data.data || []
  // Newest first (the API already returns this order, but don't rely on it).
  list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  _listCache.set(clientId, list)
  return list
}

// Cache of sessionId → full session, so re-generating the same test doesn't refetch.
const _sessionCache = new Map()

// Fetch one full measurement session by id (the raw object the program renderer expects).
// The list endpoint only returns summaries, so the actual stepResults must be fetched here.
export async function getSession(clientId, sessionId) {
  if (_sessionCache.has(sessionId)) return _sessionCache.get(sessionId)
  const token = await getToken()
  const resp = await fetch(`${BAS_API}/clients/${clientId}/measurement-sessions/${sessionId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!resp.ok) throw new Error('No session found')
  const session = await resp.json()
  _sessionCache.set(sessionId, session)
  return session
}
