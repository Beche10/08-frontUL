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
    <div className="max-w-md mx-auto p-6 bg-black shadow-md rounded-md text-gray-800">
     <form onSubmit={onSubmit} className="space-y-4">
     
      {/* Nombre */}
      <label htmlFor="">Nombre Completo</label>
      <input
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
      {errors.nombre && <span>{errors.nombre.message}</span>}
      {/* Correo */}
      <label htmlFor="correo">Correo</label>
      <input
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
      {errors.correo && <span>{errors.correo.message}</span>}
      {/* Password */}
      <label htmlFor="password">Password</label>
      <input
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
      {errors.password && <span>{errors.password.message}</span>}
      {/* Password */}
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input
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
        <span>{errors.confirmarPassword.message}</span>
      )}
      {/* Fecha de Nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
      <input
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
      {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}
      {/* Pais */}
      <label htmlFor="pais">Nacionalidad</label>
      <select
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
            type="text"
            placeholder="Provincia"
            {...register("provincia", {
              required: {
                value: true,
                message: "Provincia es requerida.",
              },
            })}
          />
          {errors.provincia && <span>{errors.provincia.message}</span>}
        </>
      )}
      ;{/* File */}
      <label htmlFor="archivo">subir nombre de archivo:</label>
      <input
        type="file"
        onChange={(e) => {
          setValue("archivo", e.target.files[0].name);
        }}
      />
      {errors.archivo && <span>{errors.archivo.message}</span>}
      {/* Terminos y condiciones */}
      <input
        type="checkbox"
        name="aceptaTerminos"
        {...register("aceptaTerminos", {
          required: {
            value: true,
            message: "Acepta los términos y condiciones",
          },
        })}
      />
      <label>Acepto los términos y condiciones</label>
      {errors.aceptaTerminos && <span>{errors.aceptaTerminos.message}</span>}
      {/* Enviar formulario */}
      <button>Enviar</button>
      <div>
          <pre className="mt-4 p-2 bg-gray-100 rounded-md text-red-500">{JSON.stringify(watch(), null, 2)}</pre>
       </div>
      <h3>Hello {watch("nombre")}</h3>
    </form>
    </div>
  );
};
