import React from "react";

export const MessageCard = ({ mensaje, onClose }) => {
  return (
    <div className="col-span-4 bg-secondary-700 p-4 mt-2 rounded-md">
      <h4 className="text-white font-bold">Datos completos:</h4>
      <p className="mt-2">
        <strong>Fecha:</strong>{" "}
        {new Date(mensaje.fecha).toLocaleDateString("es-ES")}
      </p>
      <p className="mt-2">
        <strong>Nombre:</strong> {mensaje.nombre}
      </p>
      <p className="mt-2">
        <strong>Email:</strong> {mensaje.correo}
      </p>
      <p className="mt-2">
        <strong>Mensaje:</strong> {mensaje.mensaje}
      </p>
      {/* Botón para cerrar la card */}
      <button
        onClick={onClose}
        className="mt-3 bg-blue-500 text-white py-1 px-4 rounded-md"
      >
        Cerrar
      </button>
    </div>
  );
};
