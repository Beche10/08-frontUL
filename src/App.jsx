import React from "react";
import "./tailwind.css";
//import { Form } from "./components/Form";

export const App = () => {
  return (
    <div className="w-[90%] bg-color-background mx-auto overflow-hidden max-w-screen-xl font-dm-sans text-white">
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
            <img
              className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto"
              src="/logoSinBack.png"
              alt="LogoPartido"
            />
          </figure>

          <article className="text-center mt-8 md:w-1/2 md:text-left">
            <h1 className="text-4xl md:text-5xl">
              Hola, Bienvenido a tu espacio.
            </h1>
            <p className="text-gray-color text-xl mt-3 mb-6">
              Somos libertarios.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit, minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
              <a
                className="flex items-center justify-center border-white border"
                href="#"
              >
                Nosotros
              </a>

              <a
                className="flex bg-indigo-700 items-center justify-center"
                href="#"
              >
                Afiliarme
              </a>
            </div>
          </article>
        </section>
      </header>

      <main>
        <section className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl">Sobre nosotros</h2>
          <p className="mt-8 mb-16 leading-normal text-gray-color md:w-4/5 md:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            nesciunt odio, pariatur itaque voluptates qui necessitatibus ut,
            sunt at corporis tenetur asperiores. Nesciunt dolor possimus,
            repellat ad aperiam iusto velit!
          </p>
          <div>
            <article className="w-max grid justify-items-center">


            <div className="icons-container">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icons"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>

            </div>

            <h3 className="text-2xl mt-4 mb-2">Email</h3>
            <p className="font-light">union@libertaria.com</p>


            </article>
          </div>
        </section>
      </main>
    </div>
  );
};


