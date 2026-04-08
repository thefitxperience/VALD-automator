import { Routes, Route, NavLink } from 'react-router-dom'
import ProgramGeneration from './pages/ProgramGeneration'
import Reports from './pages/Reports'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-8 shadow-sm">
        <span className="text-gray-900 font-bold text-lg tracking-tight">VALD Automator</span>
        <div className="flex gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
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
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
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
