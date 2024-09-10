import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form"; // Importa useFormContext
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import "./sigCanvas.css";
import "./customPopup.css";

export const SignatureForm = ({ register, errors, setValue }) => {
  const { trigger } = useFormContext(); // Usar trigger de useFormContext
  const [imageUrl, setImageUrl] = useState(null); // URL de la firma
  const [isSigned, setIsSigned] = useState(false); // Estado de si se firmó
  const [showSavedMessage, setShowSavedMessage] = useState(false); // Mensaje al guardar
  const sigCanvas = useRef(null); // Referencia al canvas de la firma

  // Función para limpiar el canvas de firma
  const limpiar = () => {
    sigCanvas.current.clear(); // Limpia el canvas
    setIsSigned(false); // Marca que no se ha firmado
    setImageUrl(null); // Limpia la URL de la firma
    setValue("firma", ""); // Limpia el valor del campo 'firma' en el formulario
  };

  // Función para guardar la firma
  const guardar = async () => {
    if (!sigCanvas.current.isEmpty()) {
      // Verifica si la firma no está vacía
      const signatureDataURL = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png"); // Convierte la firma a base64
      setImageUrl(signatureDataURL); // Almacena la imagen en el estado
      setValue("firma", signatureDataURL); // Asigna la firma al campo oculto 'firma'
      setIsSigned(true); // Marca que se ha firmado
      setShowSavedMessage(true); // Muestra el mensaje de éxito
      setTimeout(() => setShowSavedMessage(false), 3000); // Oculta el mensaje después de 3 segundos
    } else {
      setIsSigned(false); // Marca que no se ha firmado
    }

    await trigger("firma"); // Activa la validación para el campo 'firma'
  };

  return (
    <div className="">
      <Popup
        modal
        className="custom-popup"
        trigger={
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full focus:outline-none focus:shadow-outline"
          >
            Firma
          </button>
        }
        closeOnDocumentClick={false}
      >
        {(close) => (
          <div className="absolute bg-white p-1 rounded-lg shadow-lg max-w-md w-[166%] mx-auto">
            <div className="flex justify-center items-center w-full bg-gray-200 p-1 rounded-lg mb-4">
              <SignaturePad
                ref={sigCanvas}
                penColor="black"
                canvasProps={{
                  className:
                    "w-full h-64 md:h-48 border-2 border-black rounded",
                }}
                velocityFilterWeight={0.7}
                minWidth={1}
                maxWidth={2}
                dotSize={1.5}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                onClick={close}
              >
                Cerrar
              </button>
              <button
                className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                onClick={limpiar}
              >
                Limpiar
              </button>
              <button
                className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                onClick={guardar}
              >
                Guardar
              </button>
            </div>
            {showSavedMessage && (
              <div className="text-green-600 mt-2 text-center font-bold">
                Firma guardada con éxito.
              </div>
            )}
          </div>
        )}
      </Popup>
      <input
        type="hidden"
        {...register("firma", {
          required: !isSigned && "Firma es requerida.",
        })}
      />
      {errors.firma && (
        <span className="text-red-500">{errors.firma.message}</span>
      )}
    </div>
  );
};
