import React, { useState, useEffect } from "react";
import axios from "axios"; // Importamos Axios
import { IoMdArrowDropleft, IoMdArrowDropright  } from "react-icons/io";
import { DropDownActions } from "../utils/DropDownActions";

export const Affiliates = () => {
  const [afiliados, setAfiliados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagina, setPagina] = useState(0); // Estado para la paginación
  const [totalAfiliados, setTotalAfiliados] = useState(0); // Total de mensajes

  const limite = 5; // Mostrar 4 mensajes por página

  // Efecto para obtener los mensajes según la página
  useEffect(() => {
    const obtenerMensajes = async () => {
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
        console.error("Error al obtener los mensajes:", error);
        setError("Error al obtener los mensajes");
      } finally {
        setLoading(false);
      }
    };

    obtenerMensajes();
  }, [pagina, afiliados]); // Volver a ejecutar cuando cambie la página

  const totalPaginas = Math.ceil(totalAfiliados / limite); // Número total de páginas

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl text-gray-200">Panel de afiliados</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        {/* Encabezado */}
        <div className="hidden md:grid grid-cols-5 gap-4 mb-2 p-2">
          <h5>Fecha</h5>
          <h5>Nombre</h5>
          <h5>Ciudad</h5>
          <h5>Contacto</h5>
          <h5>Acción</h5>
        </div>

        {/* Listado de mensajes */}
        {afiliados.map((afiliados) => (
          <div
            key={afiliados._id} // Suponemos que el ID es _id, ajusta según tu modelo
            className="grid grid-cols-1 md:grid-cols-5 gap-2 items-start mb-4 bg-secondary-900 p-2 rounded-xl"
          >
            <div>
              <h5 className="md:hidden text-white font-bold">Fecha</h5>
              <p>
                {new Date(afiliados.fecha).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </p>{" "}
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Nombre</h5>
              <p>{afiliados.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Ciudad</h5>
              <p>{afiliados.departamento}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Contacto</h5>
              <p>{afiliados.celular}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Acción</h5>
              <p>{<DropDownActions />}</p>
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

        <span className="text-white">
          Página {pagina + 1} de {totalPaginas}
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
