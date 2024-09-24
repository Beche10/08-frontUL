import React, { useState, useEffect } from "react";
import axios from "axios"; // Importamos Axios

export const Messages = () => {
  // Estado para almacenar los mensajes recibidos de la API
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  // Efecto para hacer la petición GET cuando se monte el componente
  useEffect(() => {
    const obtenerMensajes = async () => {
      try {
        // Hacemos la solicitud GET al backend
        const response = await axios.get("http://localhost:8080/api/consultas");
        const data = response.data.mensajes; // Accedemos a la lista de mensajes en la respuesta
        setMensajes(data); // Guardamos los mensajes en el estado
      } catch (error) {
        console.error("Error al obtener los mensajes:", error);
        setError("Error al obtener los mensajes");
      } finally {
        setLoading(false); // Indicamos que se ha terminado de cargar
      }
    };

    obtenerMensajes(); // Llamamos a la función
  }, [mensajes]); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl text-white">Mensajes Recibidos</h1>
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        {/* Encabezado */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-2 p-2">
          <h5>Nombre</h5>
          <h5>Email</h5>
          <h5>Mensaje</h5>
        </div>

        {/* Listado de mensajes */}
        {mensajes.map((mensaje) => (
          <div
            key={mensaje._id} // Suponemos que el ID es _id, ajusta según tu modelo
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-4 bg-secondary-900 p-4 rounded-xl"
          >
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
    </div>
  );
};
