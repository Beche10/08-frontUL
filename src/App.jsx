import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
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
              <a href="#Nosotros">Nosotros</a>
            </li>

            <li>
              <a href="#">Afiliarse</a>
            </li>

            <li>
              <a href="#Contacto">Contactanos</a>
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
        <section id="Nosotros" className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl">Sobre nosotros</h2>
          <p className="mt-8 mb-16 leading-normal text-gray-color md:w-4/5 md:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            nesciunt odio, pariatur itaque voluptates qui necessitatibus ut,
            sunt at corporis tenetur asperiores. Nesciunt dolor possimus,
            repellat ad aperiam iusto velit!
          </p>

          <div className="grid gap-8 justify-center justify-items-center md:grid-cols-3">
            <article className="w-max grid justify-items-center">
              <div className="icons-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icons"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                </svg>
              </div>

              <h3 className="text-2xl mt-4 mb-2">Email</h3>
              <p className="font-light">union@libertaria.com</p>
            </article>

            <article className="w-max grid justify-items-center">
              <div className="icons-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icons"
                >
                  <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                  <circle cx="11.994" cy="11.979" r="3.003"></circle>
                </svg>
              </div>

              <h3 className="text-2xl mt-4 mb-2">Instagram</h3>
              <p className="font-light">@UnionLibertariaCatamarca</p>
            </article>

            <article className="w-max grid justify-items-center">
              <div className="icons-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icons"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </div>

              <h3 className="text-2xl mt-4 mb-2">Twitter</h3>
              <p className="font-light">@ULCat</p>
            </article>
          </div>
        </section>

        <section id="Contacto" className="py-16">
          <h2 className="text-4xl mb-16 text-center md:text-5xl">Contacto</h2>

          <form className="flex flex-wrap justify-between gap-8 px-1 max-w-screen-lg mx-auto">
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
              type="email"
              placeholder="Email"
            />

            <textarea
              className="border px-4 py-6 min-w-full max-w-full w-full min-h-[100px] max-h-60 focus-input"
              placeholder="Mensaje"
            ></textarea>

            <input
              className="bg-green-color py-5 px-14 mx-auto cursor-pointer"
              type="submit"
              value={"Enviar"}
            />
          </form>
        </section>
      </main>

      <footer className="py-24 text-center">
        <p className="text-xl text-gray-color">&copy; Augusto Villegas 2024</p>
      </footer>
    </div>
  );
};
