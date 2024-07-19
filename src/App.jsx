import React from "react";
import "./tailwind.css";
//import { Form } from "./components/Form";

export const App = () => {
 
  return (

    <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl font-dm-sans text-white"> 
    
    
    <header>
      
      <nav className="flex h-20 items-center justify-between">
       
        <a className="w-1/2 max-w-[280px]" href="./">
          <img className="block w-full" src="/wordsBack.png" alt="Partido Union Libertaria" />
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


      <section className="pt-10 pb-16 md:flex justify-between items-center gap-8">
        
        <figure className="md:order-1">
          <img className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto" src="/logoSinBack.png" alt="LogoPartido" />
        </figure>
        
        <article className="text-center mt-8 md:w-1/2 md:text-left">
            <h1 className="text-4xl">Hola, Bienvenido a tu espacio.</h1>
            <p className="text-gray-color text-xl mt-3 mb-6">Somos libertarios.</p>
            <div className="grid grid-cols-[repeat(auto-fit, minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0  ">

              <a className="flex items-center justify-center border-white border" href="#">Nosotros</a>

              <a className="bg-green-color flex items-center justify-center" href="#">Afiliarme</a>
            
            </div>



        </article>


      </section>
   
   
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
