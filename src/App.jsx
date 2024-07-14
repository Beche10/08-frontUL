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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-indigo-600 p-4 text-white text-center fixed top-0">
        <h1 className="text-2xl font-bold">Union Libertaria CATAMARCA</h1>
      </header>

      {/* Contenedor para centrar el formulario */}
      <div className="flex-grow flex items-center justify-center mt-20 w-full">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md border border-gray-300">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre Completo
              </label>
              <input
                id="nombre"
                type="text"
                {...register("nombre", {
                  required: "Nombre es requerido.",
                  minLength: { value: 2, message: "Nombre debe tener al menos dos caracteres" },
                  maxLength: { value: 20, message: "Nombre debe tener máximo 20 caracteres" },
                })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
            </div> {/* Fin Nombre */}

            {/* Correo */}
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
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
              {errors.correo && <span className="text-red-500">{errors.correo.message}</span>}
            </div> {/* Fin Correo */}

            {/* Password */}
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
            </div> {/* Fin Password */}

            {/* Confirmar Password */}
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
            </div> {/* Fin Confirmar Password */}

            {/* Fecha de Nacimiento */}
            <div>
              <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">
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
                    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                    return edad >= 16 || "Debes ser mayor de 16 años.";
                  },
                })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.fechaNacimiento && (
                <span className="text-red-500">{errors.fechaNacimiento.message}</span>
              )}
            </div> {/* Fin Fecha de Nacimiento */}

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
                <option value="ar">Argentina</option>
                <option value="mx">Mexicana</option>
                <option value="co">Colombiana</option>
              </select>
              {watch("pais") === "ar" && (
                <input
                  type="text"
                  placeholder="Provincia"
                  {...register("provincia", {
                    required: "Provincia es requerida.",
                  })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              )}
              {errors.provincia && <span className="text-red-500">{errors.provincia.message}</span>}
            </div> {/* Fin Nacionalidad */}

            {/* Subir Archivo */}
            <div>
              <label htmlFor="archivo" className="block text-sm font-medium text-gray-700">
                Subir nombre de archivo:
              </label>
              <input
                id="archivo"
                type="file"
                onChange={(e) => {
                  setValue("archivo", e.target.files[0].name);
                }}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.archivo && <span className="text-red-500">{errors.archivo.message}</span>}
            </div> {/* Fin Subir Archivo */}

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
              <label htmlFor="aceptaTerminos" className="ml-2 block text-sm text-gray-900">
                Acepto los términos y condiciones
              </label>
              {errors.aceptaTerminos && (
                <span className="text-red-500 ml-1">{errors.aceptaTerminos.message}</span>
              )}
            </div> {/* Fin Aceptar Términos */}

            {/* Enviar formulario */}
            <div>
              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center items-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div> {/* Fin Enviar formulario */}

          </form>
        </div>
      </div>
    </div>
  );
};
