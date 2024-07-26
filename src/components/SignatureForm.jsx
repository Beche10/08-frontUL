import React from "react";
import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import "./sigCanvas.css";

export const SignatureForm = ({ register, errors }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const sigCanvas = useRef({});

  const limpiar = () => sigCanvas.current.clear();
  const guardar = () => setImageUrl(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  console.log(imageUrl);

  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline">
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
