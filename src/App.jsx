import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Conceptos from './pages/Conceptos'
import Plan from './pages/Plan'
import EjerciciosFaciles from './pages/EjerciciosFaciles'
import EjerciciosDificiles from './pages/EjerciciosDificiles'
import Hacks from './pages/Hacks'
import './App.css'

const nav = [
  { to: '/', label: '📚 Conceptos Clave' },
  { to: '/plan', label: '🗓 Plan de Estudios' },
  { to: '/ejercicios-faciles', label: '🟢 Ejercicios Fáciles' },
  { to: '/ejercicios-dificiles', label: '🔴 Ejercicios Difíciles' },
  { to: '/hacks', label: '⚡ Hacks Opción Múltiple' },
]

function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* ── Overlay for mobile ── */}
      {open && (
        <div onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 99 }} />
      )}

      {/* ── Sidebar ── */}
      <nav className={`sidebar${open ? ' sidebar--open' : ''}`}>
        <div style={{ padding: '1rem 1.2rem 1rem', borderBottom: '1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3 }}>
              Cálculo Vectorial
            </div>
            <div style={{ color: 'var(--text2)', fontSize: '0.75rem', marginTop: 3 }}>Plan de Estudio Parcial</div>
          </div>
          <button className="sidebar-close" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div style={{ padding: '0.7rem 0' }}>
          {nav.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block', padding: '0.65rem 1.2rem',
                color: isActive ? 'var(--accent)' : 'var(--text2)',
                background: isActive ? 'rgba(76,85,212,0.1)' : 'transparent',
                borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: isActive ? 600 : 400,
                transition: 'all 0.15s'
              })}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* ── Main content ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Mobile top bar */}
        <header className="topbar">
          <button className="hamburger" onClick={() => setOpen(true)}>☰</button>
          <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.95rem' }}>Cálculo Vectorial</span>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Conceptos />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/ejercicios-faciles" element={<EjerciciosFaciles />} />
            <Route path="/ejercicios-dificiles" element={<EjerciciosDificiles />} />
            <Route path="/hacks" element={<Hacks />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
