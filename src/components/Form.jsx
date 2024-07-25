import { Link } from "react-router-dom";
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
      firma: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    alert("Enviando datos");
    reset();
  });

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
              <Link to="/afiliarme">Afiliarse</Link>
            </li>

            <li>
              <a href="#Ayuda">Ayuda</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grid grid-cols-auto grid-rows-auto items-center justify-center gap-8 px-1 max-w-screen-lg mx-auto">
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-auto     gap-8 px-3 py-3 max-w-screen-lg mx-auto border rounded-lg"
        >
          <h2 className=" bg-indigo-500 px-2 py-4 text-3xl text-center text-white mb-6 rounded-md col-span-2">
            Preinscripción para afiliados
          </h2>

          <div className="">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-300"
            >
              Nombre Completo
            </label>
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
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
              <span className="text-red-500">{errors.nombre.message}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="dni"
              className="block text-sm font-medium text-gray-300"
            >
              Documento de identidad
            </label>
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
              id="dni"
              type="text"
              placeholder="12321123"
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
              <span className="text-red-500">{errors.dni.message}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-300"
            >
              Correo
            </label>
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
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
              <span className="text-red-500">{errors.correo.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="fechaNacimiento"
              className="block text-sm font-medium text-gray-300"
            >
              Fecha de Nacimiento
            </label>
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
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
            />
            {errors.fechaNacimiento && (
              <span className="text-red-500">
                {errors.fechaNacimiento.message}
              </span>
            )}
          </div>

          <div className="">
            <label
              htmlFor="domicilio"
              className="block text-sm font-medium text-gray-300"
            >
              Domicilio
            </label>
            <input
              className="border-b px-2 py-4 flex-grow basis-60 focus-input"
              id="domicilio"
              type="text"
              placeholder="Calle Falsa 123"
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
              <span className="text-red-500">{errors.domicilio.message}</span>
            )}
          </div>

          <div className="col-span-2">
            <label
              htmlFor="pais"
              className="block text-sm font-medium text-gray-300 -mt-2"
            >
              Nacionalidad
            </label>
            <select
              id="pais"
              {...register("pais", { required: "Nacionalidad es requerida." })}
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                  className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                      className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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

          <div className="col-span-2">
            <label
              htmlFor="estadoCivil"
              className="block text-sm font-medium text-gray-300 -mt-4"
            >
              Estado Civil
            </label>
            <select
              id="estadoCivil"
              {...register("estadoCivil", {
                required: "Estado civil es requerido.",
              })}
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              <span className="text-red-500">{errors.estadoCivil.message}</span>
            )}
          </div>

          <div className="col-span-2">
            <label
              htmlFor="ocupacion"
              className="block text-sm font-medium text-gray-300 -mt-4"
            >
              Ocupación
            </label>
            <select
              id="ocupacion"
              {...register("ocupacion", {
                required: "Ocupación es requerida.",
              })}
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-2"
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

          <div className="flex flex-col -mt-4 col-span-2">
            <label htmlFor="fotoDni">Subir archivo:</label>
            <input type="file" {...register("foto")} />
          </div>

          <div className="flex items-center col-span-2 -mt-2">
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
              <span className="text-red-500 ml-2">
                {errors.aceptaTerminos.message}
              </span>
            )}
          </div>

          <div className="flex justify-center">
            <SignatureForm
              register={register}
              errors={errors}
              setValue={setValue}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-[150px] bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
