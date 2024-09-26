import React, { useState, useEffect } from "react";
import axios from "axios"; // Importamos Axios

export const Messages = () => {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagina, setPagina] = useState(0); // Estado para la paginación
  const [totalMensajes, setTotalMensajes] = useState(0); // Total de mensajes

  const limite = 4; // Mostrar 4 mensajes por página

  // Efecto para obtener los mensajes según la página
  useEffect(() => {
    const obtenerMensajes = async () => {
      setLoading(true);
      try {
        // Petición GET al backend con paginación (limite y pagina)
        const response = await axios.get(
          `http://localhost:8080/api/consultas?limite=${limite}&desde=${
            pagina * limite
          }`
        );
        const { mensajes, total } = response.data;

        setMensajes(mensajes); // Guardamos los mensajes
        setTotalMensajes(total); // Guardamos el total de mensajes
      } catch (error) {
        console.error("Error al obtener los mensajes:", error);
        setError("Error al obtener los mensajes");
      } finally {
        setLoading(false);
      }
    };

    obtenerMensajes();
  }, [pagina, mensajes]); // Volver a ejecutar cuando cambie la página

  const totalPaginas = Math.ceil(totalMensajes / limite); // Número total de páginas

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl text-white">Mensajes Recibidos</h1>
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        {/* Encabezado */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-2 p-2">
          <h5>Fecha</h5>
          <h5>Nombre</h5>
          <h5>Email</h5>
          <h5>Mensaje</h5>
        </div>

        {/* Listado de mensajes */}
        {mensajes.map((mensaje) => (
          <div
            key={mensaje._id} // Suponemos que el ID es _id, ajusta según tu modelo
            className="grid grid-cols-1 md:grid-cols-4 gap-2 items-start mb-4 bg-secondary-900 p-2 rounded-xl"
          >
            <div>
              <h5 className="md:hidden text-white font-bold">Fecha</h5>
              <p>
                {new Date(mensaje.fecha).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </p>{" "}
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Nombre</h5>
              <p>{mensaje.nombre}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Email</h5>
              <p>{mensaje.correo}</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold">Mensaje</h5>
              <p>{mensaje.mensaje}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={() => setPagina(pagina > 0 ? pagina - 1 : 0)}
          disabled={pagina === 0}
          className="bg-primary hover:bg-primary/90 p-2 rounded-md text-gray-200"
        >
          Anterior
        </button>

        <span className="text-white">
          Página {pagina + 1} de {totalPaginas}
        </span>

        <button
          onClick={() =>
            setPagina(pagina < totalPaginas - 1 ? pagina + 1 : pagina)
          }
          disabled={pagina >= totalPaginas - 1}
          className="bg-primary hover:bg-primary/90 p-2 rounded-md text-gray-200"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
