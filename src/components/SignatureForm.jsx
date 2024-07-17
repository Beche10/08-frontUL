import React from "react";
import { useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import "./sigCanvas.css";

export const SignatureForm = () => {
  const sigCanvas = useRef({});

  const limpiar = () => {
    sigCanvas.current.clear()
  };

  const guardar = () => {
      console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))
  };

  return (
    <div>
      <Popup
        modal
        trigger={<button> Firme Aquí! </button>}
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

            <button onClick={close}>Cerrar</button>
            <button onClick={limpiar}>Limpiar</button>
            <button onClick={guardar}>Guardar</button>
          </>
        )}
      </Popup>
    </div>
  );
};
