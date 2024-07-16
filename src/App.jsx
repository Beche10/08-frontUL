import React from "react";
import { useForm } from "react-hook-form";

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Enviando datos");
    reset();
  });

  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      {/* Header */}
      <header className="relative w-full bg-indigo-600 p-4 text-white text-center">
  <div className="flex items-center justify-center">
    <img
      className="h-16 w-16 rounded-full object-cover mr-4"
      src="/LogoULPerfil.png"
      alt="Logo"
    />
    <h1 className="text-2xl font-bold">Union Libertaria CATAMARCA</h1>
  </div>
</header>
   
       

      {/* Contenedor para centrar el formulario */}
      <div className="flex-grow flex items-center justify-center mt-32 w-full">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md border border-gray-300">
           {/* Encabezado del formulario */}
           <h2 className="text-xl text-center text-white bg-indigo-600 mb-4 p-6">Preinscripción para afiliados</h2>
           <form onSubmit={onSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre Completo
              </label>
              <input
                id="nombre"
                type="text"
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
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.nombre && (
                <span className="text-red-500">{errors.nombre.message}</span>
              )}
            </div>{" "}
            {/* Fin Nombre */}
            {/* DNI */}
            <div>
              <label
                htmlFor="dni"
                className="block text-sm font-medium text-gray-700"
              >
                DNI
              </label>
              <input
                id="dni"
                type="text"
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
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.dni && (
                <span className="text-red-500">{errors.dni.message}</span>
              )}
            </div>{" "}
            {/* Fin DNI */}            
            {/* Correo */}
            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700"
              >
                Correo
              </label>
              <input
                id="correo"
                type="email"
                {...register("correo", {
                  required: "Correo es requerido.",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Correo no válido",
                  },
                })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.correo && (
                <span className="text-red-500">{errors.correo.message}</span>
              )}
            </div>{" "}
            {/* Fin Correo */}
            {/* Password 
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password es requerido.",
                  minLength: { value: 6, message: "Password debe tener al menos 6 caracteres" },
                })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div> Fin Password */}
            {/* Confirmar Password 
            <div>
              <label htmlFor="confirmarPassword" className="block text-sm font-medium text-gray-700">
                Confirmar Password
              </label>
              <input
                id="confirmarPassword"
                type="password"
                {...register("confirmarPassword", {
                  required: "Confirmar password es requerido.",
                  validate: (value) => value === watch("password") || "Los passwords no coinciden",
                })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.confirmarPassword && (
                <span className="text-red-500">{errors.confirmarPassword.message}</span>
              )}
            </div>  Fin Confirmar Password*/}
            {/* Fecha de Nacimiento */}
            <div>
              <label
                htmlFor="fechaNacimiento"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de Nacimiento
              </label>
              <input
                id="fechaNacimiento"
                type="date"
                {...register("fechaNacimiento", {
                  required: "Fecha de nacimiento es requerida.",
                  validate: (value) => {
                    const fechaNacimiento = new Date(value);
                    const fechaActual = new Date();
                    const edad =
                      fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                    return edad >= 16 || "Debes ser mayor de 16 años.";
                  },
                })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.fechaNacimiento && (
                <span className="text-red-500">
                  {errors.fechaNacimiento.message}
                </span>
              )}
            </div>{" "}
            {/* Fin Fecha de Nacimiento */}
            {/* Nacionalidad */}
<div>
  <label htmlFor="pais" className="block text-sm font-medium text-gray-700">
    Nacionalidad
  </label>
  <select
    id="pais"
    {...register("pais", { required: true })}
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  >
    <option value="" disabled selected>Seleccionar nacionalidad</option>
    <option value="ar">Argentina</option>
    <option value="mx">Mexicana</option>
    <option value="co">Colombiana</option>
  </select>
  {watch("pais") === "ar" && (
    <div className="mt-2">
      <label htmlFor="provincia" className="block text-sm font-medium text-gray-700">
        Provincia
      </label>
      <select
        id="provincia"
        {...register("provincia", {
          required: "Provincia es requerida.",
        })}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="" disabled selected>Seleccione una provincia</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Catamarca">Catamarca</option>
        <option value="Chaco">Chaco</option>
        <option value="Chubut">Chubut</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Corrientes">Corrientes</option>
        <option value="Entre Ríos">Entre Ríos</option>
        <option value="Formosa">Formosa</option>
        <option value="Jujuy">Jujuy</option>
        <option value="La Pampa">La Pampa</option>
        <option value="La Rioja">La Rioja</option>
        <option value="Mendoza">Mendoza</option>
        <option value="Misiones">Misiones</option>
        <option value="Neuquén">Neuquén</option>
        <option value="Río Negro">Río Negro</option>
        <option value="Salta">Salta</option>
        <option value="San Juan">San Juan</option>
        <option value="San Luis">San Luis</option>
        <option value="Santa Cruz">Santa Cruz</option>
        <option value="Santa Fe">Santa Fe</option>
        <option value="Santiago del Estero">Santiago del Estero</option>
        <option value="Tierra del Fuego">Tierra del Fuego</option>
        <option value="Tucumán">Tucumán</option>
      </select>
      {watch("provincia") === "Catamarca" && (
        <div className="mt-2">
          <label htmlFor="departamento" className="block text-sm font-medium text-gray-700">
            Departamento
          </label>
          <select
            id="departamento"
            {...register("departamento", {
              required: "Departamento es requerido.",
            })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="" disabled selected>Seleccione un departamento</option>
            <option value="Ambato">Ambato</option>
            <option value="Ancasti">Ancasti</option>
            <option value="Andalgalá">Andalgalá</option>
            <option value="Antofagasta de la Sierra">Antofagasta de la Sierra</option>
            <option value="Belén">Belén</option>
            <option value="Capayán">Capayán</option>
            <option value="Capital">Capital</option>
            <option value="El Alto">El Alto</option>
            <option value="Fray Mamerto Esquiú">Fray Mamerto Esquiú</option>
            <option value="La Paz">La Paz</option>
            <option value="Paclín">Paclín</option>
            <option value="Pomán">Pomán</option>
            <option value="Santa María">Santa María</option>
            <option value="Santa Rosa">Santa Rosa</option>
            <option value="Tinogasta">Tinogasta</option>
            <option value="Valle Viejo">Valle Viejo</option>
          </select>
          {errors.departamento && (
            <span className="text-red-500">{errors.departamento.message}</span>
          )}
        </div>
      )}
    </div>
  )}
  {errors.provincia && (
    <span className="text-red-500">{errors.provincia.message}</span>
  )}
</div> {/* Fin Nacionalidad */}
            {/* Estado Civil */}
            <div>
              <label
                htmlFor="estadoCivil"
                className="block text-sm font-medium text-gray-700"
              >
                Estado Civil
              </label>
              <select
                id="estadoCivil"
                {...register("estadoCivil", { required: true })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled selected>
                  Seleccionar estado civil
                </option>
                <option value="soltero">Soltero/a</option>
                <option value="casado">Casado/a</option>
                <option value="divorciado">Divorciado/a</option>
                <option value="viudo">Viudo/a</option>
                <option value="unionLibre">Unión libre</option>
              </select>
              {errors.estadoCivil && (
                <span className="text-red-500">{errors.estadoCivil.message}</span>
              )}
            </div>{" "}
            {/* Fin Estado Civil */}
            {/* Ocupación */}
            <div>
              <label
                htmlFor="ocupacion"
                className="block text-sm font-medium text-gray-700"
              >
                Ocupación
              </label>
              <select
                id="ocupacion"
                {...register("ocupacion", { required: true })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="" disabled selected>
                  Seleccionar ocupación
                </option>
                <option value="empleado">Empleado/a</option>
                <option value="estudiante">Estudiante</option>
                <option value="desempleado">Desempleado/a</option>
                <option value="independiente">Independiente</option>
                <option value="jubilado">Jubilado/a</option>
                <option value="otro">Otro</option>
              </select>
              {errors.ocupacion && (
                <span className="text-red-500">{errors.ocupacion.message}</span>
              )}
            </div>{" "}
            {/* Fin Ocupación */}         
            {/* Subir Archivo */}
            <div>
              <label
                htmlFor="archivo"
                className="block text-sm font-medium text-gray-700"
              >
                Subir archivo:
              </label>
              <input
                id="archivo"
                type="file"
                onChange={(e) => {
                  setValue("archivo", e.target.files[0].name);
                }}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.archivo && (
                <span className="text-red-500">{errors.archivo.message}</span>
              )}
            </div>{" "}
            {/* Fin Subir Archivo */}
            {/* Aceptar Términos */}
            <div className="flex items-center">
              <input
                id="aceptaTerminos"
                type="checkbox"
                {...register("aceptaTerminos", {
                  required: "Acepta los términos y condiciones",
                })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="aceptaTerminos"
                className="ml-2 block text-sm text-gray-900"
              >
                Acepto los términos y condiciones
              </label>
              {errors.aceptaTerminos && (
                <span className="text-red-500 ml-1">
                  {errors.aceptaTerminos.message}
                </span>
              )}
            </div>{" "}
            {/* Fin Aceptar Términos */}
            {/* Enviar formulario */}
            <div>
              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center items-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div>{" "}
            {/* Fin Enviar formulario */}
          </form>
        </div>
      </div>
    </div>
  );
};
