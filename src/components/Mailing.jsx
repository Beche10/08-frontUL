import React, { useState } from "react";
import axios from "axios";

export const Mailing = () => {
  const [correo, setCorreo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async () => {
    try {
      const response = await axios.post("/api/mailing", {
        to: correo,
        subject: subject,
        text: message,
      });

      if (response.status === 200) {
        alert("Email enviado con éxito");
        setCorreo("");  // Limpiar los campos tras el envío
        setSubject("");
        setMessage("");
      } else {
        alert("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error enviando el correo");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4 md:-mt-4">
        <h1 className="text-3xl text-gray-200">Mailing</h1>
      </div>

      <div className="bg-secondary-100 p-24 rounded-lg">
        <div className="mb-3">
          <h1>Emails</h1>
          <input
            type="text"
            placeholder="Destinatario"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="mb-4 p-2 w-full rounded"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Asunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mb-4 p-2 w-full rounded"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 p-2 w-full rounded"
          />
        </div>
        <div>
          <button
            onClick={handleSendEmail}
            className="bg-green-color text-black font-bold py-3 px-2 rounded-md"
          >
            Send Emails
          </button>
        </div>
      </div>
    </div>
  );
};
