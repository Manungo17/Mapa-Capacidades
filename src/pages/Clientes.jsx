import React, { useState } from "react";
import { clientes as dataInicial } from "../data/clientes";

export default function Clientes() {
  const [busqueda, setBusqueda] = useState("");
  const [clientes, setClientes] = useState(dataInicial);

  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    estado: "Activo",
  });

  const filtrarClientes = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoCliente({ ...nuevoCliente, [name]: value });
  };

  const agregarCliente = () => {
    if (!nuevoCliente.nombre || !nuevoCliente.correo || !nuevoCliente.telefono) return;

    const nuevo = {
      ...nuevoCliente,
      id: clientes.length + 1,
    };

    setClientes([...clientes, nuevo]);
    setNuevoCliente({ nombre: "", correo: "", telefono: "", estado: "Activo" });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Gestión de Clientes</h1>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="mb-6 p-4 border rounded bg-gray-50">
        <h2 className="font-semibold mb-2 text-green-800">Nuevo Cliente</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <input
            name="nombre"
            value={nuevoCliente.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="border p-2 rounded"
          />
          <input
            name="correo"
            value={nuevoCliente.correo}
            onChange={handleChange}
            placeholder="Correo"
            className="border p-2 rounded"
          />
          <input
            name="telefono"
            value={nuevoCliente.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            className="border p-2 rounded"
          />
          <select
            name="estado"
            value={nuevoCliente.estado}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>Activo</option>
            <option>Potencial</option>
            <option>Inactivo</option>
          </select>
        </div>
        <button
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={agregarCliente}
        >
          Agregar Cliente
        </button>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead className="bg-green-200">
          <tr>
            <th className="border px-3 py-2">Nombre</th>
            <th className="border px-3 py-2">Correo</th>
            <th className="border px-3 py-2">Teléfono</th>
            <th className="border px-3 py-2">Estado</th>
            <th className="border px-3 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtrarClientes.map((cliente) => (
            <tr key={cliente.id} className="hover:bg-green-50">
              <td className="border px-3 py-2">{cliente.nombre}</td>
              <td className="border px-3 py-2">{cliente.correo}</td>
              <td className="border px-3 py-2">{cliente.telefono}</td>
              <td className="border px-3 py-2">{cliente.estado}</td>
              <td className="border px-3 py-2 text-center">
                <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700">
                  Ver más
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
