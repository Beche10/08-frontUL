import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignatureForm } from "./SignatureForm";
import { RiUser2Fill, RiMailFill } from "react-icons/ri";
import { HiMiniIdentification } from "react-icons/hi2";



export const Form = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    trigger,
  } = useForm({
    defaultValues: {
      nombre: "",
      dni: "",
      correo: "",
      fechaNacimiento: "",
      pais: "",
      provincia: "",
      departamento: "",
      estadoCivil: "",
      ocupacion: "",
      aceptaTerminos: false,
      firma: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (!data.firma) {
      trigger("firma");
      return;
    }
    alert("Enviando datos");
    reset();
  });

  return (
    <div className="w-full mx-auto overflow-hidden max-w-screen-xl font-dm-sans text-white">
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
              <RouterLink
                to="/"
                className={`${activeLink === "/" ? "active" : ""}`}
                onClick={() => handleSetActive("/")}
              >
                Inicio
              </RouterLink>
            </li>

            <li>
              <RouterLink
                className="flex items-center justify-center"
                to="/afiliarme"
              >
                Afiliarme
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/ayuda">Ayuda</RouterLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grid auto-cols-auto auto-rows-auto items-center justify-center gap-8 px-4 max-w-screen-lg mx-auto  rounded-lg">
      <div className="bg-secondary-100 px-4 py-4 rounded-lg max-w-[450px] mx-auto">
        <form onSubmit={onSubmit} className="gap-8 px-3 py-3 rounded-lg">
          <h2 className="bg-primary uppercase px-2 py-4 text-3xl text-center text-white mb-4 rounded-md col-span-2">
            Preinscripción de afiliados.
          </h2>









          <div className="col-span-2 md:col-span-1 mb-4 relative">         
         <RiUser2Fill className="absolute top-1/2 left-2 transform -translate-y-1/2 mt-2" />
                 
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-300"
            >
              Nombre Completo
            </label>
            <input
              className="w-full pl-8 pr-4 md:w-3/4 lg:w-5/6 xl:w-7/10 border-b border-primary px-2 py-3 bg-secondary-100 focus-input"
              id="nombre"
              type="text"
              placeholder="Pedro Gimenez"
              {...register("nombre", {
                required: "Nombre es requerido.",
                minLength: {
                  value: 2,
                  message: "Nombre debe tener al menos dos caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Nombre debe tener máximo 20 caracteres",
                },
              })}
            />
            {errors.nombre && (
              <span className="text-red-500 block mt-1">
                {errors.nombre.message}
              </span>
            )}
            </div>
      








          <div className="col-span-2 md:col-span-1 mb-4 relative"> 
          <HiMiniIdentification className="absolute top-1/2 left-2 transform -translate-y-1/2 mt-2" />
            <label
              htmlFor="dni"
              className="block text-sm font-medium text-gray-300"
            >
              Documento de identidad
            </label>
            <input
              className="w-full md:w-5/6 lg:w-5/6 xl:w-7/10 border-b border-primary bg-secondary-100 px-8 py-3 focus-input"
              id="dni"
              type="text"
              placeholder="28XXX123"
              {...register("dni", {
                required: "DNI es requerido.",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "DNI solo debe contener números",
                },
                minLength: {
                  value: 7,
                  message: "DNI debe tener al menos 7 caracteres",
                },
                maxLength: {
                  value: 8,
                  message: "DNI debe tener máximo 8 caracteres",
                },
              })}
            />
            {errors.dni && (
              <span className="text-red-500 block mt-1">
                {errors.dni.message}
              </span>
            )}
          </div>




          <div className="col-span-2 md:col-span-1 mb-4 relative">
          <RiMailFill className="absolute top-1/2 left-2 transform -translate-y-1/2 mt-2" />
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-300"
            >
              Correo
            </label>
            <input
              className="w-full md:w-3/4 lg:w-5/6 xl:w-7/10 border-b border-primary bg-secondary-100 px-8 py-3 focus-input"
              id="correo"
              type="email"
              placeholder="pedrog@email.com"
              {...register("correo", {
                required: "Correo es requerido.",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Correo no válido",
                },
              })}
            />
            {errors.correo && (
              <span className="text-red-500 block mt-1">
                {errors.correo.message}
              </span>
            )}
          </div>




          <div className="col-span-2 md:col-span-1 mb-4">
              <label
              htmlFor="fechaNacimiento"
              className="block text-sm font-medium text-gray-300"
            >
              Fecha de Nacimiento
            </label>
            <input
              className="px-2 py-3 border-b border-primary bg-secondary-100 focus-input"
              id="fechaNacimiento"
              type="date"
              {...register("fechaNacimiento", {
                required: "Fecha de nac. es requerida.",
                validate: (value) => {
                  const fechaNacimiento = new Date(value);
                  const fechaActual = new Date();
                  const edad =
                    fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                  return edad >= 16 || "Debes ser mayor de 16 años.";
                },
              })}
            />
            {errors.fechaNacimiento && (
              <span className="text-red-500 block mt-1">
                {errors.fechaNacimiento.message}
              </span>
            )}
          </div>






          <div className="col-span-2 md:col-span-1 mb-4">
            <label
              htmlFor="domicilio"
              className="block text-sm font-medium text-gray-300"
            >
              Domicilio
            </label>
            <input
              className="w-full md:w-3/4 lg:w-5/6 xl:w-7/10 border-b border-primary bg-secondary-100 px-2 py-3 focus-input"
              id="domicilio"
              type="text"
              placeholder="Calle Publica 123"
              {...register("domicilio", {
                required: "Domicilio es requerido.",
                minLength: {
                  value: 5,
                  message: "Domicilio debe tener al menos cinco caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Domicilio debe tener máximo 50 caracteres",
                },
              })}
            />
            {errors.domicilio && (
              <span className="text-red-500 block mt-1">
                {errors.domicilio.message}
              </span>
            )}
          </div>

          <div className="col-span-2 md:col-span-1 mb-4">
            <label
              htmlFor="celular"
              className="block text-sm font-medium text-gray-300"
            >
              Celular
            </label>
            <input
              className="w-full md:w-3/4 lg:w-5/6 xl:w-7/10 border-b border-primary bg-secondary-100 px-2 py-3 focus-input"
              id="celular"
              type="text"
              placeholder="(3834)-123456"
              {...register("celular", {
                required: "Celular es requerido.",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Celular solo debe contener números",
                },
                minLength: {
                  value: 10,
                  message: "Celular debe tener al menos 10 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "Celular debe tener máximo 15 caracteres",
                },
              })}
            />
            {errors.celular && (
              <span className="text-red-500 block mt-1">
                {errors.celular.message}
              </span>
            )}
          </div>

          <div className="col-span-2 mb-4 ">
            <label
              htmlFor="pais"
              className="block text-sm font-medium text-gray-300"
            >
              Nacionalidad
            </label>
            <select
              id="pais"
              {...register("pais", { required: "Nacionalidad es requerida." })}
              className="mt-1 block w-full px-4 py-2 bg-secondary-100 text-white border border-white rounded-md shadow-sm focus:border-primary focus:ring focus:ring-white-200 focus:ring-opacity-50"
            >
              <option value="" disabled>
                Seleccionar nacionalidad
              </option>
              <option value="ar">Argentina</option>
              <option value="otra">Otra</option>
            </select>
            {errors.pais && (
              <span className="text-red-500">{errors.pais.message}</span>
            )}
            {watch("pais") === "ar" && (
              <div className="mt-4">
                <label
                  htmlFor="provincia"
                  className="block text-sm font-medium text-gray-300"
                >
                  Provincia
                </label>
                <select
                  id="provincia"
                  {...register("provincia", {
                    required: "Provincia es requerida.",
                  })}
                  className="mt-1 block w-full px-4 py-2 bg-secondary-100 text-white border border-white rounded-md shadow-sm focus:border-primary focus:ring focus:ring-white-200 focus:ring-opacity-50"
                >
                  <option value="" disabled>
                    Seleccione una provincia
                  </option>

                  <option value="Catamarca">Catamarca</option>
                  <option value="Otra">Otra</option>
                </select>
                {errors.provincia && (
                  <span className="text-red-500">
                    {errors.provincia.message}
                  </span>
                )}
                {watch("provincia") === "Catamarca" && (
                  <div className="mt-4">
                    <label
                      htmlFor="departamento"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Departamento
                    </label>
                    <select
                      id="departamento"
                      {...register("departamento", {
                        required: "Departamento es requerido.",
                      })}
                      className="mt-1 block w-full px-4 py-2 bg-secondary-100 text-white border border-white rounded-md shadow-sm focus:border-primary focus:ring focus:ring-white-200 focus:ring-opacity-50"
                    >
                      <option value="" disabled>
                        Seleccione un departamento
                      </option>
                      <option value="Ambato">Ambato</option>
                      <option value="Ancasti">Ancasti</option>
                      <option value="Andalgalá">Andalgalá</option>
                      <option value="Antofagasta de la Sierra">
                        Antofagasta de la Sierra
                      </option>
                      <option value="Belén">Belén</option>
                      <option value="Capayán">Capayán</option>
                      <option value="Capital">Capital</option>
                      <option value="El Alto">El Alto</option>
                      <option value="Fray Mamerto Esquiú">
                        Fray Mamerto Esquiú
                      </option>
                      <option value="La Paz">La Paz</option>
                      <option value="Paclín">Paclín</option>
                      <option value="Pomán">Pomán</option>
                      <option value="Santa María">Santa María</option>
                      <option value="Santa Rosa">Santa Rosa</option>
                      <option value="Tinogasta">Tinogasta</option>
                      <option value="Valle Viejo">Valle Viejo</option>
                    </select>
                    {errors.departamento && (
                      <span className="text-red-500 block mt-1">
                        {errors.departamento.message}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="col-span-2 mb-4">
            <label
              htmlFor="estadoCivil"
              className="block text-sm font-medium text-gray-300"
            >
              Estado Civil
            </label>
            <select
              id="estadoCivil"
              {...register("estadoCivil", {
                required: "Estado civil es requerido.",
              })}
              className="mt-1 block w-full px-4 py-2 bg-secondary-100 text-white border border-white rounded-md shadow-sm focus:border-primary focus:ring focus:ring-white-200 focus:ring-opacity-50"
            >
              <option value="" disabled>
                Seleccione estado civil
              </option>
              <option value="soltero">Soltero/a</option>
              <option value="casado">Casado/a</option>
              <option value="divorciado">Divorciado/a</option>
              <option value="viudo">Viudo/a</option>
            </select>
            {errors.estadoCivil && (
              <span className="text-red-500 block mt-1">
                {errors.estadoCivil.message}
              </span>
            )}
          </div>

          <div className="col-span-2 mb-4">
            <label
              htmlFor="ocupacion"
              className="block text-sm font-medium text-gray-300"
            >
              Ocupación
            </label>
            <select
              id="ocupacion"
              {...register("ocupacion", {
                required: "Ocupación es requerida.",
              })}
              className="mt-1 block w-full px-4 py-2 bg-secondary-100 text-white border border-white rounded-md shadow-sm focus:border-primary focus:ring focus:ring-white-200 focus:ring-opacity-50"
            >
              <option value="" disabled>
                Selecciona tu ocupación
              </option>
              <option value="estudiante">Estudiante</option>
              <option value="empleado">Empleado</option>
              <option value="autonomo">Autónomo</option>
              <option value="desempleado">Desempleado</option>
              <option value="jubilado">Jubilado</option>
              <option value="amaDeCasa">Ama de casa</option>
              <option value="otro">Otro</option>
            </select>
            {errors.ocupacion && (
              <span className="text-red-500">{errors.ocupacion.message}</span>
            )}
          </div>

          <div className="flex flex-col col-span-2 mt-1 mb-6">
            <label htmlFor="fotoDni">Subir archivo:</label>
            <input className="bg-secondary-100"
              id="fotoDni"
              type="file"
              {...register("fotoDni", {
                required: "Documentación es requerida.",
              })}
            />
            {errors.fotoDni && (
              <span className="text-red-500 block mt-1">
                {errors.fotoDni.message}
              </span>
            )}
          </div>

          <div className="flex items-center col-span-2 mb-4">
            <input
              id="aceptaTerminos"
              type="checkbox"
              {...register("aceptaTerminos", {
                required: "Debe aceptar los términos y condiciones.",
              })}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="aceptaTerminos"
              className="ml-2 block text-sm font-medium text-gray-300"
            >
              Acepto los términos y condiciones.
            </label>
            {errors.aceptaTerminos && (
              <span className="text-red-500 mt-1 md:mt-0 md:ml-2 block">
                {errors.aceptaTerminos.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center w-full col-span-2 gap-4">
            <div className="w-full">
              <SignatureForm
                register={register}
                errors={errors}
                setValue={setValue}
                trigger={trigger}
              />
            </div>

            <div className="flex justify-center items-center w-full col-span-3">
              <button
                type="submit"
                className="flex justify-center items-center bg-green-color py-5 px-14 mx-auto cursor-pointer hover:bg-green-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};