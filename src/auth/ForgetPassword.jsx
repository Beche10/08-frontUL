import React from "react";
import { Link } from "react-router-dom";
import { RiMailFill } from "react-icons/ri";

export const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold text-white mb-8">
          Recuperar contraseña
        </h1>
        <form className="mb-8">
          <div className="relative mb-4">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus-input"
              placeholder="Correo electrónico"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary uppercase font-bold text-xs w-full py-3 px-4 rounded-lg hover:text-black transition-colors"
            >
              Enviar instrucciones
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <span className="flex items-center gap-2">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Ingresa
            </Link>
          </span>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?{" "}
            <Link
              to="/login/registro"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
