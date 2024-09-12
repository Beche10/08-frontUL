import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "reactjs-popup/dist/index.css";
import "./sigCanvas.css";
import "./customPopup.css";

export const StepSignature = () => {
  const { register, setValue, trigger, formState: { errors } } = useFormContext();
  const [isSigned, setIsSigned] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const sigCanvas = useRef(null);

  const limpiar = () => {
    sigCanvas.current.clear();
    setIsSigned(false);
    setValue("firma", "");
  };

  const guardar = async () => {
    if (!sigCanvas.current.isEmpty()) {
      const signatureDataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      setValue("firma", signatureDataURL);
      setIsSigned(true);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
    }
    await trigger("firma");
  };

  return (
    <div>
      <Popup
        modal
        trigger={<button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Firma</button>}
        closeOnDocumentClick={false}
      >
        {(close) => (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{ className: "w-full h-64 border-2 border-gray-300" }}
            />
            <div className="flex justify-between mt-4">
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={limpiar}>Limpiar</button>
              <button type="button" className="bg-green-500 text-white px-4 py-2 rounded" onClick={guardar}>Guardar</button>
              <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={close}>Cerrar</button>
            </div>
          </div>
        )}
      </Popup>
      {isSigned && <p className="text-green-500">Firma guardada correctamente.</p>}
      {showSavedMessage && <p className="text-green-500">¡Firma guardada exitosamente!</p>}
      <div className="mt-4">
        <input type="checkbox" {...register("terms", { required: "Debes aceptar los términos" })} />
        <label className="ml-2">Acepto los términos y condiciones</label>
        {errors.terms && <p className="text-red-500 text-xs italic">{errors.terms.message}</p>}
      </div>
    </div>
  );
};
