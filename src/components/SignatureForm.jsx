import React from "react";
import { useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import "./sigCanvas.css";

export const SignatureForm = () => {
  const sigCanvas = useRef({});

  const limpiar = () => {
    sigCanvas.current.clear();
  };

  const guardar = () => {
    console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="w-full mt-4 bg-green-500 border border-transparent rounded-md py-2 px-4 inline-flex justify-center items-center text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {" "}
            Firma{" "}
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
          </>
        )}
      </Popup>
    </div>
  );
};
