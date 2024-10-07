import React from "react";

export const MessageCard = ({ mensaje, onClose }) => {
  return (
    <div className="col-span-4 bg-secondary-700 p-4 mt-2 rounded-md">
      <h4 className="text-white font-bold">Datos completos:</h4>
      <p>
        <strong>Fecha:</strong>{" "}
        {new Date(mensaje.fecha).toLocaleDateString("es-ES")}
      </p>
      <p>
        <strong>Nombre:</strong> {mensaje.nombre}
      </p>
      <p>
        <strong>Email:</strong> {mensaje.correo}
      </p>
      <p>
        <strong>Mensaje:</strong> {mensaje.mensaje}
      </p>
      {/* Botón para cerrar la card */}
      <button onClick={onClose} className="mt-3  rounded-lg  text-blue-500">
        Cerrar
      </button>
    </div>
  );
};
