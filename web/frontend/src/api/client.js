import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  timeout: 30000, // 30s default — fails fast instead of hanging forever
})

export default api

// Helpers
export const checkFile = (gym, file) => {
  const fd = new FormData()
  fd.append('gym', gym)
  fd.append('file', file)
  return api.post('/api/check', fd, { timeout: 90000 })
}

export const getBranches = (gym) => api.get('/api/branches', { params: { gym } })
export const getTrainers = (gym, branch) => api.get('/api/trainers', { params: { gym, branch } })
export const getTrainerWhatsapp = (gym, branch, trainer) =>
  api.get('/api/trainer-whatsapp', { params: { gym, branch, trainer } })

export const approveProgram = (payload) => api.post('/api/programs/approve', payload)
export const unapproveProgram = (payload) => api.post('/api/programs/unapprove', payload)
export const ignoreTest = (payload) => api.post('/api/programs/ignore', payload)
export const unignoreTest = (payload) => api.post('/api/programs/unignore', payload)
export const patchProgram = (id, payload) => api.patch(`/api/programs/${id}`, payload)

export const generatePdf = (payload) =>
  api.post('/api/programs/generate-pdf', payload, { responseType: 'blob', timeout: 60000 })

export const previewHtml = (payload) =>
  api.post('/api/programs/preview', payload, { responseType: 'text', timeout: 60000 })

export const uploadPdf = (programId, pdfType, file) => {
  const fd = new FormData()
  fd.append('pdf_type', pdfType)
  fd.append('file', file)
  return api.post(`/api/programs/${programId}/upload-pdf`, fd, { timeout: 60000 })
}

export const generateReport = (params) => {
  const fd = new FormData()
  Object.entries(params).forEach(([k, v]) => v != null && fd.append(k, v))
  return api.post('/api/report/generate', fd, { responseType: 'blob', timeout: 120000 })
}

export const quickGenerate = (gym, file) => {
  const fd = new FormData()
  fd.append('gym', gym)
  fd.append('file', file)
  return api.post('/api/quick-generate', fd, { timeout: 90000 })
}

export const getAllTrainersData = (gym) =>
  api.get('/api/trainers/all', { params: { gym } })

export const getTrainersFull = (gym, branch) =>
  api.get('/api/trainers-full', { params: { gym, branch } })

export const addTrainer = (payload) =>
  api.post('/api/trainers', payload)

export const updateTrainer = (id, payload) =>
  api.put(`/api/trainers/${id}`, payload)

export const deleteTrainer = (id) =>
  api.delete(`/api/trainers/${id}`)

export const listPrograms = (gym, approved, year, month) =>
  api.get('/api/programs', { params: { gym, approved, year, month } })

export const generatePaymentReport = (month, year) => {
  const fd = new FormData()
  fd.append('month', month)
  fd.append('year', year)
  return api.post('/api/report/payment', fd, { responseType: 'blob', timeout: 120000 })
}

export const generateGrowthTracker = (gym, month, year) => {
  const fd = new FormData()
  fd.append('gym', gym)
  fd.append('month', month)
  fd.append('year', year)
  return api.post('/api/report/growth', fd, { responseType: 'blob', timeout: 120000 })
}

// ── Bodydot test approval / status ──
export const getBodydotTests = (gym) =>
  api.get('/api/bodydot/tests', { params: { gym } })

// Sweep the last N days of tests (cached) merged with stored status — drives New/Completed.
export const getBodydotRecent = (gym, days = 10, refresh = false) =>
  api.get('/api/bodydot/recent', { params: { gym, days, refresh }, timeout: 300000 })

export const approveBodydotTest = (payload) =>
  api.post('/api/bodydot/tests/approve', payload)

export const ignoreBodydotTest = (payload) =>
  api.post('/api/bodydot/tests/ignore', payload)

export const unapproveBodydotTest = (sessionId) =>
  api.post(`/api/bodydot/tests/${sessionId}/unapprove`)

export const patchBodydotTest = (sessionId, payload) =>
  api.patch(`/api/bodydot/tests/${sessionId}`, payload)

export const autoRecordInvalid = (gym, month, year) => {
  const fd = new FormData()
  fd.append('gym', gym)
  fd.append('month', month)
  fd.append('year', year)
  return api.post('/api/bodydot/auto-record-invalid', fd, { timeout: 300000 })
}

export const getReportCounts = (year, month) =>
  api.get('/api/report/counts', { params: { year, month } })

export const generateBodydotReport = (params) => {
  const fd = new FormData()
  Object.entries(params).forEach(([k, v]) => v != null && fd.append(k, v))
  return api.post('/api/report/bodydot', fd, { responseType: 'blob', timeout: 300000 })
}
