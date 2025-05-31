
import React from "react";
import { leads } from "../data/leads";

export default function Leads() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Clientes Potenciales (Leads)</h1>
      <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead className="bg-green-200">
          <tr>
            <th className="border border-gray-300 px-2 py-1">ID</th>
            <th className="border border-gray-300 px-2 py-1">Nombre</th>
            <th className="border border-gray-300 px-2 py-1">Email</th>
            <th className="border border-gray-300 px-2 py-1">Estado</th>
            <th className="border border-gray-300 px-2 py-1">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-green-50">
              <td className="border border-gray-300 px-2 py-1">{lead.id}</td>
              <td className="border border-gray-300 px-2 py-1">{lead.name}</td>
              <td className="border border-gray-300 px-2 py-1">{lead.email}</td>
              <td className="border border-gray-300 px-2 py-1">{lead.status}</td>
              <td className="border border-gray-300 px-2 py-1">{lead.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
