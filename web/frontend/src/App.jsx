import { Routes, Route, NavLink } from 'react-router-dom'
import ProgramGeneration from './pages/ProgramGeneration'
import Reports from './pages/Reports'
import QuickGenerate from './pages/QuickGenerate'
import TrainerManager from './pages/TrainerManager'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-2 flex items-center">
        {/* Logos stacked */}
        <div className="flex flex-col items-center gap-0.5 mr-8">
          <img src={`${import.meta.env.BASE_URL}FIT_LOGO.png`} alt="Fit Logo" className="h-12 w-auto object-contain mt-1" />
          <img src={`${import.meta.env.BASE_URL}VALD.png`} alt="VALD" className="h-12 w-auto object-contain -mb-2" />
        </div>
        {/* Left links */}
        <div className="flex gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            Program Generation
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`
            }
          >
            Reports
          </NavLink>
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        {/* Divider */}
        <div className="w-px h-6 bg-gray-700 mx-4" />
        {/* Right links — utility/secondary style */}
        <div className="flex gap-1">
          <NavLink
            to="/quick"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'border border-brand-500 text-brand-300 bg-brand-950/40'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent'
              }`
            }
          >
            Quick Generate
          </NavLink>
          <NavLink
            to="/trainers"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'border border-brand-500 text-brand-300 bg-brand-950/40'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent'
              }`
            }
          >
            Trainers
          </NavLink>
        </div>
      </nav>

      {/* Page */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<ProgramGeneration />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/quick" element={<QuickGenerate />} />
          <Route path="/trainers" element={<TrainerManager />} />
        </Routes>
      </main>
    </div>
  )
}
