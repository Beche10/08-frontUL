import React from "react";
import "./tailwind.css";
//import { Form } from "./components/Form";

export const App = () => {
  return (

    <div class="w-[90%] mx-auto overflow-hidden max-w-screen-xl font-dm-sans text-white"> 
    
    
    <header>
      
      <nav className="flex h-20 items-center justify-between">
       
        <a className="w-1/2 max-w-[280px]" href="./">
          <img className="block w-full" src="./logoUL.svg" alt="Partido Union Libertaria" />
        </a>

        <input className="peer/menu hidden" type="checkbox" id="menu" />

        <label className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden" htmlFor="menu"></label>

        <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
          <li>
            <a href="#">Nosotros</a>
          </li>
          
          <li>
            <a href="#">Afiliarse</a>
          </li>
          
          <li>
            <a href="#">Contactanos</a>
          </li>
        </ul>


      </nav>
   
   
    </header>
    
    
    
    
    </div>
  );
};









/*     <div className="mwin-h-screen bg-black flex flex-col items-center">
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
  */
