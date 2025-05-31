
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

const leadsPorMes = [
  { mes: "Enero", leads: 5 },
  { mes: "Febrero", leads: 7 },
  { mes: "Marzo", leads: 10 },
  { mes: "Abril", leads: 4 },
  { mes: "Mayo", leads: 8 },
];

const campañasEstado = [
  { name: "Activas", value: 6 },
  { name: "Inactivas", value: 2 },
];

const colores = ["#4ade80", "#f87171"];

export default function Estadisticas() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Estadísticas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-2 rounded shadow-md">
          <h2 className="text-sm font-semibold text-center mb-2">Leads por Mes</h2>
          <BarChart width={300} height={200} data={leadsPorMes}>
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="leads" fill="#4ade80" />
          </BarChart>
        </div>

        <div className="bg-white p-2 rounded shadow-md">
          <h2 className="text-sm font-semibold text-center mb-2">Estado de Campañas</h2>
          <PieChart width={300} height={200}>
            <Pie
              data={campañasEstado}
              cx="50%"
              cy="50%"
              outerRadius={60}
              label
              dataKey="value"
            >
              {campañasEstado.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
