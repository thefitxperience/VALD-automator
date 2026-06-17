/**
 * TrainersContext — loads all trainer data from the API on mount,
 * provides sync accessors compatible with the old trainers.js API.
 */
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { getAllTrainersData } from '../api/client'

// Mirror of BRANCH_ORDER in report_generator.py
const branchOrder = {
  'Body Masters': [
    'RUH - Al Malaz','RUH - Al Massif','RUH - Al Aarid','RUH - Al Sahafa',
    'RUH - Al Wadi','RUH - Eshbilia','RUH - Muzahmiyah','RUH - Rabwa',
    'RUH - Salam','RUH - Swaidi','RUH - Takhasousi','RUH - Al Badia',
    'RUH - Al Fayha','RUH - Al Khaleej','RUH - Al Kharj','RUH - Al Nahda',
    'RUH - Badr','RUH - Ezdehar','RUH - Murooj','RUH - Shubra',
    'DMM - Al Athir','DMM - Al Jameyeen','DMM - Hufof','DMM - Khobar',
    'JED - Hamadania','JED - Al Rawdah','JED - Makkah',
    'JED - Obhor - Al Amwaj','JED - Obhor - Al Sheraa',
    'ALQ - Al Rass','ALQ - Buraidah','ALQ - Unaizah',
    'MED - Shouran','MED - Taiba',
    'Uhud','AlUla','Al Mubaraz','Hafr El Batin','Tabuk','Najran',
    'Khamis Mushait','Hail',
  ],
  'Body Motions': [
    'RUH - Al Malaz','RUH - Al Sahafa','RUH - Al Aarid','RUH - Al Fayha',
    'RUH - Al Uraija','RUH - Badr','RUH - Al Badia',
    'JED - Al Basateen','JED - Al Faisaliyah','JED - Al Naeem',
    'DMM - Al Faisaliyah','DMM - Al Jalawiah','DMM - Al Nada',
    'ALQ - Buraidah','ALQ - Unaizah',
    'Al Ahsaa','AlUla','Tabuk',
  ],
}

const TrainersContext = createContext(null)

export function TrainersProvider({ children }) {
  // data shape: { "Body Motions": { "RUH - Al Aarid": [{id, name, whatsapp, sort_order}, ...] } }
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const load = useCallback(async (gym) => {
    if (!gym || data[gym]) return
    setLoading(true)
    try {
      const res = await getAllTrainersData(gym)
      setData((prev) => ({ ...prev, [gym]: res.data || {} }))
    } catch {
      // fallback: leave empty
    } finally {
      setLoading(false)
    }
  }, [data])

  const reload = useCallback(async (gym) => {
    if (!gym) return
    setLoading(true)
    try {
      const res = await getAllTrainersData(gym)
      setData((prev) => ({ ...prev, [gym]: res.data || {} }))
    } catch {
      //
    } finally {
      setLoading(false)
    }
  }, [])

  const getBranches = (gym) => Object.keys(data[gym] || {}).sort((a, b) => {
    const order = branchOrder[gym] || []
    const ai = order.indexOf(a)
    const bi = order.indexOf(b)
    if (ai === -1 && bi === -1) return a.localeCompare(b)
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })

  const getTrainers = (gym, branch) =>
    [...(data[gym]?.[branch] || [])].sort((a, b) => a.name.localeCompare(b.name)).map((t) => t.name)

  const getAllTrainers = (gym) =>
    Object.values(data[gym] || {}).flat().map((t) => t.name).sort((a, b) => a.localeCompare(b))

  const getBranchForTrainer = (gym, trainerName) => {
    for (const [branch, trainers] of Object.entries(data[gym] || {})) {
      if (trainers.some((t) => t.name === trainerName)) return branch
    }
    return null
  }

  const getTrainerRecord = (gym, branch, name) =>
    (data[gym]?.[branch] || []).find((t) => t.name === name) || null

  return (
    <TrainersContext.Provider value={{ data, loading, load, reload, getBranches, getTrainers, getAllTrainers, getBranchForTrainer, getTrainerRecord }}>
      {children}
    </TrainersContext.Provider>
  )
}

export function useTrainers() {
  const ctx = useContext(TrainersContext)
  if (!ctx) throw new Error('useTrainers must be used inside TrainersProvider')
  return ctx
}
