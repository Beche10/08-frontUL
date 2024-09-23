import React from "react";

export const Messages = (props) => {
  const {
    nombre, // Nombre de usuario
    correo, // Email del usuario
    mensaje, // Cuerpo de la consulta
  } = props;


  






  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl text-white">Mensajes Recibidos</h1>
      </div>

      <div className="bg-secondary-100 p-8 rounded-xl">
        {/* Encabezado */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-5 p-2">
          <h5>Nombre</h5>
          <h5>Email</h5>
          <h5>Mensaje</h5>
        </div>

        {/* Listado de mensajes */}

        <div
          key={mensaje.id}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-4 bg-secondary-900 p-4 rounded-xl"
        >
          <div>
            <h5 className="md:hidden text-white font-bold">Nombre</h5>
            <p>{nombre}</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold">Email</h5>
            <p>{correo}</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold">Mensaje</h5>
            <p>{mensaje}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
