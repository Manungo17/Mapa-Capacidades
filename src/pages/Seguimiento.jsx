import React, { useState } from "react";

export default function Seguimiento() {
  const [seguimientos, setSeguimientos] = useState([
    { id: 1, cliente: "Carmen Shiki", fecha: "2025-05-30", accion: "Llamada", observacion: "Interesada en aceites esenciales" },
    { id: 2, cliente: "Luis Andi", fecha: "2025-05-28", accion: "Visita", observacion: "Pidió cotización de productos naturales" },
    { id: 3, cliente: "Rosa Uyunkar", fecha: "2025-05-27", accion: "Correo", observacion: "Solicitó más información" },
    { id: 4, cliente: "Carlos Shuar", fecha: "2025-05-26", accion: "WhatsApp", observacion: "Conversación inicial" },
    { id: 5, cliente: "María Kuyuk", fecha: "2025-05-25", accion: "Llamada", observacion: "Cliente antiguo, sin contacto reciente" },
    { id: 6, cliente: "Patricio Aranda", fecha: "2025-05-24", accion: "Reunión", observacion: "Demostración de productos" },
    { id: 7, cliente: "Ana Mashinka", fecha: "2025-05-23", accion: "Llamada", observacion: "Requiere visita técnica" },
    { id: 8, cliente: "Diego Ushigua", fecha: "2025-05-22", accion: "Visita", observacion: "Negociación en curso" },
    { id: 9, cliente: "Juana Iwia", fecha: "2025-05-21", accion: "Correo", observacion: "Solicitó ficha técnica" },
    { id: 10, cliente: "Lucía Antun", fecha: "2025-05-20", accion: "Llamada", observacion: "Interesada en descuentos" },
  ]);

  const [nuevo, setNuevo] = useState({ cliente: "", fecha: "", accion: "", observacion: "" });
  const [busqueda, setBusqueda] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  const filtrar = busqueda.trim().toLowerCase();
  const resultados = filtrar
    ? seguimientos.filter(s => s.cliente.toLowerCase().includes(filtrar))
    : seguimientos;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevo({ ...nuevo, [name]: value });
  };

  const agregarSeguimiento = () => {
    if (!nuevo.cliente || !nuevo.fecha || !nuevo.accion) return;
    const registro = { ...nuevo, id: Date.now() };
    setSeguimientos([registro, ...seguimientos]);
    setNuevo({ cliente: "", fecha: "", accion: "", observacion: "" });
  };

  const iniciarEdicion = (s) => {
    setNuevo(s);
    setEditandoId(s.id);
  };

  const guardarEdicion = () => {
    setSeguimientos(seguimientos.map(s => s.id === editandoId ? nuevo : s));
    setNuevo({ cliente: "", fecha: "", accion: "", observacion: "" });
    setEditandoId(null);
  };

  const eliminarSeguimiento = (id) => {
    if (confirm("¿Seguro que deseas eliminar este seguimiento?")) {
      setSeguimientos(seguimientos.filter(s => s.id !== id));
    }
  };

  const verDetalle = (s) => {
    alert(
      `Cliente: ${s.cliente}\nFecha: ${s.fecha}\nAcción: ${s.accion}\nObservación: ${s.observacion}`
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Seguimiento de Clientes</h1>

      <input
        type="text"
        placeholder="Filtrar por cliente..."
        className="border p-2 mb-4 w-full rounded"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="mb-6 p-4 border rounded bg-gray-50">
        <h2 className="font-semibold mb-2 text-green-800">{editandoId ? "Editar Seguimiento" : "Registrar Seguimiento"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <input name="cliente" value={nuevo.cliente} onChange={handleChange} placeholder="Cliente" className="border p-2 rounded" />
          <input type="date" name="fecha" value={nuevo.fecha} onChange={handleChange} className="border p-2 rounded" />
          <input name="accion" value={nuevo.accion} onChange={handleChange} placeholder="Acción" className="border p-2 rounded" />
          <input name="observacion" value={nuevo.observacion} onChange={handleChange} placeholder="Observación" className="border p-2 rounded" />
        </div>
        <button
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={editandoId ? guardarEdicion : agregarSeguimiento}
        >
          {editandoId ? "Guardar Cambios" : "Agregar Seguimiento"}
        </button>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead className="bg-green-200">
          <tr>
            <th className="border px-3 py-2">Cliente</th>
            <th className="border px-3 py-2">Fecha</th>
            <th className="border px-3 py-2">Acción</th>
            <th className="border px-3 py-2">Observación</th>
            <th className="border px-3 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((s) => (
            <tr key={s.id} className="hover:bg-green-50">
              <td className="border px-3 py-2">{s.cliente}</td>
              <td className="border px-3 py-2">{s.fecha}</td>
              <td className="border px-3 py-2">{s.accion}</td>
              <td className="border px-3 py-2">{s.observacion}</td>
              <td className="border px-3 py-2 space-x-2 text-center">
                <button onClick={() => verDetalle(s)} className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Ver</button>
                <button onClick={() => iniciarEdicion(s)} className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">Editar</button>
                <button onClick={() => eliminarSeguimiento(s.id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
