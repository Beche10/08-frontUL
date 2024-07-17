import React from "react";
import { useForm } from "react-hook-form";
import { SignatureForm } from "./SignatureForm";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
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
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Enviando datos");
    reset();
  });

  return (
    <div className="flex-grow flex items-center justify-center w-full mt-8">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md border border-gray-300">
        <h2 className="text-xl text-center text-white bg-indigo-600 mb-4 p-7  rounded-md">
          Preinscripción para afiliados
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
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
              defaultValue=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.nombre && (
              <span className="text-red-500">{errors.nombre.message}</span>
            )}
          </div>
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
              defaultValue=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.dni && (
              <span className="text-red-500">{errors.dni.message}</span>
            )}
          </div>
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
              defaultValue=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.correo && (
              <span className="text-red-500">{errors.correo.message}</span>
            )}
          </div>
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
              defaultValue=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.fechaNacimiento && (
              <span className="text-red-500">
                {errors.fechaNacimiento.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="pais"
              className="block text-sm font-medium text-gray-700"
            >
              Nacionalidad
            </label>
            <select
              id="pais"
              {...register("pais", { required: "Nacionalidad es requerida." })}
              defaultValue=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="" disabled>
                Seleccionar nacionalidad
              </option>
              <option value="ar">Argentina</option>
              <option value="mx">Mexicana</option>
              <option value="co">Colombiana</option>
            </select>
            {errors.pais && (
              <span className="text-red-500">{errors.pais.message}</span>
            )}
            {watch("pais") === "ar" && (
              <div className="mt-2">
                <label
                  htmlFor="provincia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Provincia
                </label>
                <select
                  id="provincia"
                  {...register("provincia", {
                    required: "Provincia es requerida.",
                  })}
                  defaultValue=""
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="" disabled>
                    Seleccione una provincia
                  </option>
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
                  <option value="Santiago del Estero">
                    Santiago del Estero
                  </option>
                  <option value="Tierra del Fuego">Tierra del Fuego</option>
                  <option value="Tucumán">Tucumán</option>
                </select>
                {errors.provincia && (
                  <span className="text-red-500">
                    {errors.provincia.message}
                  </span>
                )}
                {watch("provincia") === "Catamarca" && (
                  <div className="mt-2">
                    <label
                      htmlFor="departamento"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Departamento
                    </label>
                    <select
                      id="departamento"
                      {...register("departamento", {
                        required: "Departamento es requerido.",
                      })}
                      defaultValue=""
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                      <span className="text-red-500">
                        {errors.departamento.message}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="estadoCivil"
              className="block text-sm font-medium text-gray-700"
            >
              Estado Civil
            </label>
            <select
              id="estadoCivil"
              {...register("estadoCivil", {
                required: "Estado civil es requerido.",
              })}
              defaultValue=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="" disabled>
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
          </div>
          <div>
            <label
              htmlFor="ocupacion"
              className="block text-sm font-medium text-gray-700"
            >
              Ocupación
            </label>
            <select
              id="ocupacion"
              {...register("ocupacion", {
                required: "Ocupación es requerida.",
              })}
              defaultValue=""
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="" disabled>
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
          </div>
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
          </div>
          <div className="flex flex-col">
            <div className="flex items-start">
              <input
                id="aceptaTerminos"
                type="checkbox"
                {...register("aceptaTerminos", {
                  required: "Debes aceptar los términos y condiciones.",
                })}
                defaultChecked={false}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1"
              />
              <label
                htmlFor="aceptaTerminos"
                className="ml-2 block text-sm text-gray-700"
              >
                Acepto los términos y condiciones
              </label>
            </div>
            {errors.aceptaTerminos && (
              <span className="text-red-500 mt-1">
                {errors.aceptaTerminos.message}
              </span>
            )}
          </div>
          <div>
            <SignatureForm register={register} errors={errors} setValue={setValue} />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center items-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
