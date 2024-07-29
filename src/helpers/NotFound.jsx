import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const NotFound = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  
  
  return (

    <div className="w-[90%] bg-color-background mx-auto overflow-hidden max-w-screen-xl font-dm-sans text-white">

    <div className="grid grid-cols-1 items-center justify-center gap-8 px-1 max-w-screen-lg mx-auto">
      
      <header>
        <nav className="flex h-20 items-center justify-between">
        <RouterLink
            className="w-1/2 max-w-[280px] text-3xl font-bold uppercase"
            to="/"
          >
            UNION LIBERTARIA.
          </RouterLink>

          <input className="peer/menu hidden" type="checkbox" id="menu" />

          <label
            className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"
            htmlFor="menu"
          ></label>

          <ul className="fixed inset-0 bg-indigo-600 px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
          <li>
              <ScrollLink to="Nosotros" 
              activeClass="active"       
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              onSetActive={handleSetActive}
              className={activeLink === "Nosotros" ? "active" : ""}
              >Nosotros</ScrollLink>
            </li>

            <li>
              <Link to="/afiliarme">Afiliarse</Link>
            </li>

            <li>
              <RouterLink to="/ayuda">Ayuda</RouterLink>
            </li>
          </ul>
        </nav>
      </header>
      
     
    </div>


    <div>
    <img
        className="w-full aspect-square object-cover rounded-full max-w-sm mx-auto"
        src="/logoSinBack.png"
        alt="LogoPartido"
      />
      <h1 className="text-white text-4xl mt-4 grid grid-cols-auto grid-rows-auto items-center justify-center">404</h1>
      <h2 className="text-white text-3xl grid grid-cols-auto grid-rows-auto items-center justify-center">PAGE NOT FOUND</h2>
    </div>
   
    </div>
    
  );
};
