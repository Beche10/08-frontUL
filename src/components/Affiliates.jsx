import React, { useState, useEffect } from "react";
import axios from "axios"; // Importamos Axios
import DropDownActions from "../utils/DropDownActions";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export const Affiliates = () => {
  const [afiliados, setAfiliados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagina, setPagina] = useState(0); // Estado para la paginación
  const [totalAfiliados, setTotalAfiliados] = useState(0); // Total de mensajes
  const [buscarAfiliado, setBuscarAfiliado] = useState(""); // Nuevo estado para búsqueda

  const limite = 5; // Mostrar 5 afiliados por página

  // Efecto para obtener los afiliados según la página
  useEffect(() => {
    const obtenerAfiliados = async () => {
      setLoading(true);
      try {
        // Petición GET al backend con paginación (limite y pagina)
        const response = await axios.get(
          `http://localhost:8080/api/afiliados?limite=${limite}&desde=${
            pagina * limite
          }`
        );
        const { afiliados, total } = response.data;

        setAfiliados(afiliados); // Guardamos los afiliados
        setTotalAfiliados(total); // Guardamos el total de Afiliados
      } catch (error) {
        console.error("Error al obtener los afiliados:", error);
        setError("Error al obtener los afiliados");
      } finally {
        setLoading(false);
      }
    };

    obtenerAfiliados();
  }, [pagina, afiliados]); // Volver a ejecutar cuando cambie la página

  // Filtrar afiliados según el término de búsqueda en múltiples campos
  const filteredAffiliados = afiliados.filter((afiliado) => {
    const searchTermLower = buscarAfiliado.toLowerCase(); // Convertir el término de búsqueda a minúsculas para comparación

    return (
      // Filtrar por nombre
      afiliado.nombre.toLowerCase().includes(searchTermLower) ||
      // Filtrar por departamento
      afiliado.departamento.toLowerCase().includes(searchTermLower) ||
      // Filtrar por contacto (celular)
      afiliado.celular.includes(searchTermLower) ||
      // Filtrar por fecha
      new Date(afiliado.fecha)
        .toLocaleDateString("es-ES", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
        .includes(searchTermLower)
    );
  });

  const totalPaginas = Math.ceil(totalAfiliados / limite); // Número total de páginas

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl text-gray-200">Panel de afiliados</h1>
      </div>

      <div className="w-52 sm:w-80 relative mb-3 flex items-center rounded-full overflow-hidden bg-secondary-100">
        <div>
          <FaSearch className="px-2 text-green-color rounded-full text-3xl sm:text-4xl" />{" "}
          {/* Tamaño más grande en móviles */}
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-secondary-100 text-gray-200 rounded-full focus-input px-1.5 w-full sm:text-lg sm:px-4" // Texto más grande y padding mayor en móviles
            value={buscarAfiliado}
            onChange={(e) => setBuscarAfiliado(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-secondary-100 px-8 py-5 rounded-xl">
        {/* Encabezado */}
        <div className="hidden md:grid grid-cols-5 gap-4 mb-2 p-2">
          <h5>Acción</h5>
          <h5>Fecha</h5>
          <h5>Nombre</h5>
          <h5>Ciudad</h5>
          <h5>Contacto</h5>
        </div>

        {/* Listado de afiliados filtrados */}
        {filteredAffiliados.map((afiliado) => (
          <div
            key={afiliado._id}
            className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center mb-4 bg-secondary-900 p-2 rounded-md"
          >
            <div className="">
              <div className="flex items-center justify-end md:justify-start">
                <DropDownActions />
              </div>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Fecha</h5>
              <p>
                {new Date(afiliado.fecha).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="">
              <h5 className="md:hidden text-white font-bold">Nombre</h5>
              <p>{afiliado.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Ciudad</h5>
              <p>{afiliado.departamento}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Contacto</h5>
              <p>{afiliado.celular}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center items-center mt-2 space-x-5">
        <button
          onClick={() => setPagina(pagina > 0 ? pagina - 1 : 0)}
          disabled={pagina === 0}
          className="bg-green-color/90 hover:bg-green-color p-1 rounded-full text-gray-200"
        >
          <IoMdArrowDropleft className="text-black font-bold text-3xl md:text-2xl" />
        </button>

        <span className="text-gray-300">
          Pág. {pagina + 1} de {totalPaginas}
        </span>

        <button
          onClick={() =>
            setPagina(pagina < totalPaginas - 1 ? pagina + 1 : pagina)
          }
          disabled={pagina >= totalPaginas - 1}
          className="bg-green-color/90 hover:bg-green-color p-1 rounded-full text-gray-200"
        >
          <IoMdArrowDropright className="text-black font-bold text-3xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};
