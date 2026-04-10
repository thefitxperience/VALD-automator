import { Routes, Route, NavLink } from 'react-router-dom'
import ProgramGeneration from './pages/ProgramGeneration'
import Reports from './pages/Reports'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-2 flex items-center gap-8">
        {/* Logos stacked */}
        <div className="flex flex-col items-center gap-0.5">
          <img src={`${import.meta.env.BASE_URL}FIT_LOGO.png`} alt="Fit Logo" className="h-12 w-auto object-contain mt-1" />
          <img src={`${import.meta.env.BASE_URL}VALD.png`} alt="VALD" className="h-12 w-auto object-contain -mb-2" />
        </div>
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
      </nav>

      {/* Page */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<ProgramGeneration />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  )
}
