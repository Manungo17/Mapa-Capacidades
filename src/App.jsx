import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Chatbot from './components/Chatbot'
import Estadisticas from './pages/Estadisticas'
import Inicio from './pages/Inicio' // ✅ Ruta corregida
import Clientes from './pages/Clientes' // ✅ Nueva importación
import Seguimiento from './pages/Seguimiento'
import Campanas from './pages/Campanas'

function App() {
  return (
    <div className="p-6">
      <nav className="space-x-4 mb-4">
        <Link to="/">Inicio</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/seguimiento">Seguimiento</Link>
        <Link to="/campanas">Campañas</Link>
        <Link to="/estadisticas">Estadísticas</Link>
        <Link to="/login">Iniciar Sesión</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/clientes" element={<Clientes />} /> {/* ✅ Actualizado */}
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/campanas" element={<Campanas />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Chatbot /> {/* ✅ Asegurado para estar flotante en todas las páginas */}
    </div>
  )
}

export default App
