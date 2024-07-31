import React, { useRef, useState } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import "./sigCanvas.css";
import "./customPopup.css";

export const SignatureForm = ({ register, errors, setValue }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const sigCanvas = useRef({});

  const limpiar = () => {
    sigCanvas.current.clear();
    setIsSigned(false);
    setImageUrl(null);
    setValue("firma", "");
  };


  const guardar = () => {
    if (!sigCanvas.current.isEmpty()) {
      const signatureDataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      setImageUrl(signatureDataURL);
      setValue("firma", signatureDataURL);
      setIsSigned(true);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
    } else {
      setIsSigned(false);
    }
    trigger("firma"); // Trigger validation for the "firma" field
  };


  return (
    <div className="">
      <Popup
        modal
        className="custom-popup"
        trigger={
          <button 
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full focus:outline-none focus:shadow-outline">
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
                 className: "w-full h-64 md:h-48 border-2 border-black rounded",
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
              <div className="text-green-600 mt-2 text-center font-bold">Firma guardada con éxito.</div>
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
