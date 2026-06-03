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

export const listTrainerOverrides = (gym, branch) =>
  api.get('/api/trainer-overrides', { params: { gym, ...(branch ? { branch } : {}) } })

export const getTrainersFull = (gym, branch) =>
  api.get('/api/trainers-full', { params: { gym, branch } })

export const upsertTrainerOverride = (payload) =>
  api.post('/api/trainer-overrides', payload)

export const deleteTrainerOverride = (id) =>
  api.delete(`/api/trainer-overrides/${id}`)

export const listPrograms = (gym, approved, year, month) =>
  api.get('/api/programs', { params: { gym, approved, year, month } })

export const generatePaymentReport = (month, year) => {
  const fd = new FormData()
  fd.append('month', month)
  fd.append('year', year)
  return api.post('/api/report/payment', fd, { responseType: 'blob', timeout: 120000 })
}
