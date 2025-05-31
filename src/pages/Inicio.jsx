import React from "react";

export default function Inicio() {
  const productos = [
    { nombre: "Aceites Esenciales", imagen: "/images/aceites-esenciales.jpg" },
    { nombre: "Artesanías", imagen: "/images/artesanias.jpg" },
    { nombre: "Cosméticos", imagen: "/images/cosméticos.jpg" },
    { nombre: "Especias", imagen: "/images/especias.jpg" },
    { nombre: "Fitofármacos", imagen: "/images/fitofarmacos.jpg" },
    { nombre: "Insumos Alimenticios", imagen: "/images/insumos-alimenticios.jpg" },
    { nombre: "Plantas Aromáticas", imagen: "/images/plantas-aromaticas.jpg" },
    { nombre: "Productos Naturales", imagen: "/images/productos-naturales.jpg" }
  ];

  return (
    <div className="p-4 pb-32">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((item, index) => (
          <div key={index} className="bg-white rounded shadow p-4 text-center hover:shadow-lg transition-shadow duration-300">
            <img src={item.imagen} alt={item.nombre} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold text-gray-800">{item.nombre}</h3>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              Ver {item.nombre}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
