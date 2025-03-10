import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";

import { IoCloseSharp } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./tailwind.css";

export const App = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Inicializa el formulario con useForm
  const methods = useForm({
    defaultValues: {
      nombre: "",
      correo: "", // Cambié "email" por "correo" para consistencia
      mensaje: "",
    },
  });

  // Desestructura los métodos de useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  // Función que maneja el envío del formulario
  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);
    const formData = new FormData();

    // Añadimos los campos del formulario de contacto
    formData.append("nombre", data.nombre);
    formData.append("correo", data.correo); // Usamos "correo" en vez de "email"
    formData.append("mensaje", data.mensaje);

    try {
      // Envío de datos al servidor
      const response = await axios.post(
        "https://08-backul-production.up.railway.app/api/consultas",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Consulta enviada con éxito:", response.data);
      setIsSubmitted(true); // Actualiza el estado de envío
      toast.success("Mensaje enviado con éxito"); // Notificacion de envio exitoso
      reset(); // Limpia el formulario después de enviar
    } catch (error) {
      console.error(
        "Error al enviar la consulta:",
        error.response ? error.response.data : error.message
      );
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl font-montserrat text-white">
      <header>
        <nav className="flex h-20 items-center justify-between">
          <RouterLink
            className="w-1/2 max-w-[280px] text-xl font-bold uppercase"
            to="/"
          >
            DEMOCRATIK.
          </RouterLink>
          <input
            className="peer/menu hidden"
            type="checkbox"
            id="menu"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />

          <label
            className="w-10 h-10 bg-green-color rounded-lg cursor-pointer transition-all z-40 md:hidden"
            htmlFor="menu"
          >
            {isMenuOpen ? (
              <IoCloseSharp className="w-full h-full text-black" />
            ) : (
              <BiMenuAltRight className="w-full h-full text-black" />
            )}
          </label>

          {/*
          <label
            className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"
            htmlFor="menu"
          ></label>
              */}
          <ul className="fixed inset-0 bg-primary px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent cursor-pointer z-10">
            <li>
              <RouterLink to="/">Inicio</RouterLink>
            </li>
            <li>
              <ScrollLink
                to="Nosotros"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className={activeLink === "Nosotros" ? "active" : ""}
              >
                Nosotros
              </ScrollLink>
            </li>

            <ScrollLink
              to="Contacto"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className={activeLink === "Contacto" ? "active" : ""}
            >
              Contacto
            </ScrollLink>
          </ul>
        </nav>

        <section className="pt-10 pb-16 md:flex justify-between items-center gap-8">
          <figure className="md:order-1">
            <img
              className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto md:mx-12 filter invert"
              src="https://res.cloudinary.com/dmbgkqeny/image/upload/v1738632288/LogoDemocratik_kxanow.png"
              alt="LogoDemocratik"
            />
          </figure>
          <article className="text-center mt-8 md:w-1/2 md:text-left">
            <h1 className="text-3xl md:text-5xl">
              Hola, Bienvenido a tu espacio.
            </h1>
            <p className="text-gray-color text-lg mt-3 mb-6">
              Unidad, Fuerza y Lucha.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit, minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
              <RouterLink
                className="flex items-center justify-center border border-white cursor-pointer hover:bg-slate-300/90 hover:text-black duration-300"
                to="/admin"
              >
                Portal
              </RouterLink>

              <RouterLink
                className="flex items-center justify-center bg-primary/80 hover:bg-primary hover:text-gray-300 duration-300 "
                to="/afiliarme"
              >
                Afiliarme
              </RouterLink>
            </div>
          </article>
        </section>
      </header>

      <main>
        <section id="Nosotros" className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl">Sobre Democratik</h2>
          <p className="mt-8 mb-16 leading-normal text-gray-color md:w-4/5 md:mx-auto">
            Transforma la afiliación política en un proceso simple, accesible y
            digital. Con Democratik, cualquier ciudadano puede unirse a una
            agrupación y ayudar a convertirla en un partido político, sin trabas
            ni burocracia. Más participación, más democracia, más futuro.
          </p>

          <div className="grid gap-8 justify-center justify-items-center md:grid-cols-3">
            <article className="w-max grid justify-items-center">
              <div className="icons-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icons"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </div>

              <h3 className="text-2xl mt-4 mb-2">TikTok</h3>
              <p className="font-light">@DK2025</p>
            </article>

            {/*<article className="w-max grid justify-items-center">
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
              </article>*/}

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
              <p className="font-light">@DK2025</p>
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
              <p className="font-light">@DK2025</p>
            </article>
          </div>
        </section>

        <section id="Contacto" className="py-16">
          <h2 className="text-4xl mb-16 text-center md:text-4xl ">Contacto</h2>

          <form
            onSubmit={handleSubmit(onSubmit)} // Cambia el handleSubmit para usar react-hook-form
            className="flex flex-wrap justify-between gap-8 px-1 max-w-screen-lg mx-auto"
          >
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
              placeholder="Nombre"
              type="text"
              id="nombre"
              name="nombre"
              {...register("nombre", { required: "El nombre es obligatorio" })} // Registra el campo con useForm
            />
            {errors.nombre && (
              <p className="text-red-500">{errors.nombre.message}</p>
            )}
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
              placeholder="Correo"
              type="email"
              id="correo"
              {...register("correo", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El correo no es válido",
                },
              })} // Registra el campo con validaciones
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <textarea
              className="border px-4 py-6 min-w-full max-w-full w-full min-h-[100px] max-h-60 focus-input"
              placeholder="Mensaje"
              id="mensaje"
              {...register("mensaje", {
                required: "El mensaje es obligatorio",
              })} // Registra el campo textarea
              rows="4"
            ></textarea>
            {errors.mensaje && (
              <p className="text-red-500">{errors.mensaje.message}</p>
            )}
            <button
              type="submit"
              className="bg-green-color/80 text-black font-bold py-5 px-14 mx-auto cursor-pointer hover:bg-green-color duration-300"
            >
              Enviar
            </button>
          </form>
        </section>

        {/* Componente de ToastContainer para renderizar las notificaciones */}
        <ToastContainer />
      </main>

      <footer className="py-24 text-center">
        <p className="text-xl text-gray-color">&copy; Augusto Villegas 2024</p>
        <p className="text-xl text-gray-color">v.0.0.1</p>
      </footer>
    </div>
  );
};
