import React from 'react'
import { Link } from 'react-router-dom'



export const Help = () => {
 
 
    return (
    
    <div className="w-[90%] bg-color-background mx-auto overflow-hidden max-w-screen-xl font-dm-sans text-white">

        <div>
         <header>
        <nav className="flex h-20 items-center justify-between">
          <a
            className="w-1/2 max-w-[280px] text-3xl font-bold uppercase"
            href="./"
          >
            UNION LIBERTARIA.
          </a>

          <input className="peer/menu hidden" type="checkbox" id="menu" />

          <label
            className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"
            htmlFor="menu"
          ></label>

          <ul className="fixed inset-0 bg-indigo-600 px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
            <li>
              <a href="#Nosotros">Nosotros</a>
            </li>

            <li>
              <Link to="/afiliarme">Afiliarse</Link>
            </li>

            <li>
              <a href="#Ayuda">Ayuda</a>
            </li>
          </ul>
        </nav>
      </header>
      
      
      </div>
       
       
       <h1>Help to User</h1>
       
       </div>      
   
  )
}
