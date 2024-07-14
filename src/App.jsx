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
    alert("Enviando datos");
    reset();
  });

  return (
    <div className="max-w-md mx-auto p-6 border-blue-500 bg-white shadow-md rounded-md">
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="p-4 rounded-md">
          {/* Nombre */}
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre Completo
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            {...register("nombre", {
              required: {
                value: true,
                message: "Nombre es requerido.",
              },
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
            <span className="text-red-500">{errors.nombre.message}</span>
          )}
        </div>

        <div>
          {/* Correo */}
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="correo"
          >
            Correo
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="email"
            {...register("correo", {
              required: {
                value: true,
                message: "Correo es requerido.",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.correo && (
            <span className="text-red-500 ml-1">{errors.correo.message}</span>
          )}
        </div>

        <div>
          {/* Password */}
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password es requerido.",
              },
              minLength: {
                value: 6,
                message: "Password debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 ml-1">{errors.password.message}</span>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="confirmarPassword"
          >
            Confirmar Password
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="password"
            {...register("confirmarPassword", {
              required: {
                value: true,
                message: "Confirmar password es requerido.",
              },

              validate: (value) =>
                value === watch("password") || "Los passwords no coinciden",
            })}
          />
          {errors.confirmarPassword && (
            <span className="text-red-500 ml-1">
              {errors.confirmarPassword.message}
            </span>
          )}
        </div>

        <div>
          {/* Fecha de Nacimiento */}
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="fechaNacimiento"
          >
            Fecha de Nacimiento
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="date"
            {...register("fechaNacimiento", {
              required: {
                value: true,
                message: "Fecha de nacimiento es requerida.",
              },
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
            <span className="text-red-500 ml-1">
              {errors.fechaNacimiento.message}
            </span>
          )}
        </div>

        <div>
          {/* Pais */}
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="pais"
          >
            Nacionalidad
          </label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            {...register("pais", {
              required: true,
            })}
          >
            <option value="ar">Argentina</option>
            <option value="mx">Mexicana</option>
            <option value="co">Colombiana</option>
          </select>
          {watch("pais") === "ar" && (
            <>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                placeholder="Provincia"
                {...register("provincia", {
                  required: {
                    value: true,
                    message: "Provincia es requerida.",
                  },
                })}
              />
              {errors.provincia && (
                <span className="text-red-500 ml-1">
                  {errors.provincia.message}
                </span>
              )}
            </>
          )}
        </div>

        <div>
          {/* File */}
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="archivo"
          >
            subir nombre de archivo:
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            onChange={(e) => {
              setValue("archivo", e.target.files[0].name);
            }}
          />
          {errors.archivo && (
            <span className="text-red-500 ml-1">{errors.archivo.message}</span>
          )}
        </div>

        <div className="flex items-center">
          {/* Terminos y condiciones */}
          <input
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            type="checkbox"
            name="aceptaTerminos"
            {...register("aceptaTerminos", {
              required: {
                value: true,
                message: "Acepta los términos y condiciones",
              },
            })}
          />
          <label className="ml-2 block text-sm text-gray-900">
            Acepto los términos y condiciones
          </label>
          {errors.aceptaTerminos && (
            <span className="text-red-500 ml-1">
              {errors.aceptaTerminos.message}
            </span>
          )}
        </div>

        <div>
          {/* Enviar formulario */}
          <button className="w-full mt-4 bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center items-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Enviar
          </button>
        </div>

        <div>
          <pre className="mt-4 p-2 bg-gray-100 rounded-md">
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </div>

        <h3>Hello {watch("nombre")}</h3>
      </form>
    </div>
  )
}
