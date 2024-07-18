import React from "react";
import { Form } from "./components/Form";


export const App = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <header className="relative w-full bg-indigo-600 p-4 text-white text-center">
        <div className="flex items-center justify-center">
          <img
             className="h-16 w-16 rounded-full object-cover mr-4"
            src="/logoHD.jpg"
            alt="LogoUL"
          />
          <h1 className="text-2xl font-bold">Union Libertaria CATAMARCA</h1>
        </div>
      </header>
     <Form/>
    </div>
  );
};
