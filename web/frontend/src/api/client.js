import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
})

export default api

// Helpers
export const checkFile = (gym, file) => {
  const fd = new FormData()
  fd.append('gym', gym)
  fd.append('file', file)
  return api.post('/api/check', fd)
}

export const getBranches = (gym) => api.get('/api/branches', { params: { gym } })
export const getTrainers = (gym, branch) => api.get('/api/trainers', { params: { gym, branch } })
export const getTrainerWhatsapp = (gym, branch, trainer) =>
  api.get('/api/trainer-whatsapp', { params: { gym, branch, trainer } })

export const approveProgram = (payload) => api.post('/api/programs/approve', payload)
export const patchProgram = (id, payload) => api.patch(`/api/programs/${id}`, payload)

export const generatePdf = (payload) =>
  api.post('/api/programs/generate-pdf', payload, { responseType: 'blob' })

export const previewHtml = (payload) =>
  api.post('/api/programs/preview', payload, { responseType: 'text' })

export const uploadPdf = (programId, pdfType, file) => {
  const fd = new FormData()
  fd.append('pdf_type', pdfType)
  fd.append('file', file)
  return api.post(`/api/programs/${programId}/upload-pdf`, fd)
}

export const generateReport = (params) => {
  const fd = new FormData()
  Object.entries(params).forEach(([k, v]) => v != null && fd.append(k, v))
  return api.post('/api/report/generate', fd, { responseType: 'blob' })
}

export const listPrograms = (gym, approved, year, month) =>
  api.get('/api/programs', { params: { gym, approved, year, month } })
