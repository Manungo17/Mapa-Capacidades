import React, { useState } from "react";

export default function Campanas() {
  const [campanas, setCampanas] = useState([
    {
      id: 1,
      nombre: "Difusión de Aceites Naturales",
      tipo: "Difusión",
      producto: "Aceites Esenciales",
      inicio: "2025-06-01",
      fin: "2025-06-15",
      objetivo: "Dar a conocer la nueva línea de aceites esenciales."
    },
    {
      id: 2,
      nombre: "Combo Natural de Temporada",
      tipo: "Promoción",
      producto: "Productos Naturales",
      inicio: "2025-06-10",
      fin: "2025-06-30",
      objetivo: "Incrementar ventas de combos naturales."
    },
    {
      id: 3,
      nombre: "Descuento Cosméticos Amazónicos",
      tipo: "Descuento",
      producto: "Cosméticos",
      inicio: "2025-06-05",
      fin: "2025-06-20",
      objetivo: "Promover la línea de cosméticos ecológicos."
    }
  ]);

  const [nueva, setNueva] = useState({
    nombre: "",
    tipo: "Promoción",
    producto: "",
    inicio: "",
    fin: "",
    objetivo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNueva({ ...nueva, [name]: value });
  };

  const agregarCampana = () => {
    if (!nueva.nombre || !nueva.producto || !nueva.inicio || !nueva.fin) return;
    const nuevaCamp = { ...nueva, id: Date.now() };
    setCampanas([...campanas, nuevaCamp]);
    setNueva({
      nombre: "",
      tipo: "Promoción",
      producto: "",
      inicio: "",
      fin: "",
      objetivo: ""
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Campañas y Promociones</h1>

      <div className="mb-6 p-4 border rounded bg-gray-50">
        <h2 className="font-semibold text-green-800 mb-2">Registrar nueva campaña</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <input name="nombre" value={nueva.nombre} onChange={handleChange} placeholder="Nombre de la campaña" className="border p-2 rounded" />
          <select name="tipo" value={nueva.tipo} onChange={handleChange} className="border p-2 rounded">
            <option>Promoción</option>
            <option>Descuento</option>
            <option>Difusión</option>
          </select>
          <input name="producto" value={nueva.producto} onChange={handleChange} placeholder="Producto asociado" className="border p-2 rounded" />
          <input type="date" name="inicio" value={nueva.inicio} onChange={handleChange} className="border p-2 rounded" />
          <input type="date" name="fin" value={nueva.fin} onChange={handleChange} className="border p-2 rounded" />
          <input name="objetivo" value={nueva.objetivo} onChange={handleChange} placeholder="Objetivo de la campaña" className="border p-2 rounded col-span-1 sm:col-span-2 lg:col-span-3" />
        </div>
        <button onClick={agregarCampana} className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Agregar Campaña
        </button>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead className="bg-green-200">
          <tr>
            <th className="border px-3 py-2">Nombre</th>
            <th className="border px-3 py-2">Tipo</th>
            <th className="border px-3 py-2">Producto</th>
            <th className="border px-3 py-2">Inicio</th>
            <th className="border px-3 py-2">Fin</th>
            <th className="border px-3 py-2">Objetivo</th>
          </tr>
        </thead>
        <tbody>
          {campanas.map((c) => (
            <tr key={c.id} className="hover:bg-green-50">
              <td className="border px-3 py-2">{c.nombre}</td>
              <td className="border px-3 py-2">{c.tipo}</td>
              <td className="border px-3 py-2">{c.producto}</td>
              <td className="border px-3 py-2">{c.inicio}</td>
              <td className="border px-3 py-2">{c.fin}</td>
              <td className="border px-3 py-2">{c.objetivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
