import React from "react";
import { useRef, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import "./sigCanvas.css";

export const SignatureForm = ({ register, errors, setValue }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const sigCanvas = useRef({});

  const limpiar = () => {
    sigCanvas.current.clear();
    setValue("firma", "");
  };

  const guardar = () => {
    setImageUrl(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  };
  
  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="w-[170px] mt-4 bg-blue-600 border border-transparent rounded-md py-3 px-2 inline-flex justify-center items-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Firma
          </button>
        }
        closeOnDocumentClick={false}
      >
        {(close) => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas",
              }}
            />
            <div className="flex flex-col sm:flex-row justify-between mt-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                onClick={close}
              >
                Cerrar
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded"
                onClick={limpiar}
              >
                Limpiar
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
                onClick={guardar}
              >
                Guardar
              </button>
            </div>
          </>
        )}
      </Popup>
      <input 
        type="hidden"
        {...register("firma", { required: "Firma es requerida." })}
      />
      {errors.firma && (
        <span className="text-red-500">{errors.firma.message}</span>
      )}
    </div>
  );
};
