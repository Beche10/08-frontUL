import React from "react";
import Popup from "reactjs-popup";
import SignaturePad from 'react-signature-canvas';
import 'reactjs-popup/dist/index.css';
import './sigCanvas.css';


export const SignatureForm = () => {



  return (
    
    <div>
      <Popup modal trigger={<button> Firme Aquí! </button>} closeOnDocumentClick={false}>
        {close => (
        <>
        <SignaturePad canvasProps={{
          className: "signatureCanvas"
        }}/>

        <button onClick={close}>Cerrar</button>

        </>  
       )}
      </Popup>
    </div>
  
  );
};
