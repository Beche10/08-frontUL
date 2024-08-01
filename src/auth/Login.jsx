import React from "react";

export const Login = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <h1 className="text-3xl uppercase text-white font-bold tracking-[5px] ">Iniciar Sesión.</h1>
      <form >
        <div>
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icons w-4 h-4"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
            Ingresa con google
          </button>
        </div>
      </form>
    </div>
  );
};



