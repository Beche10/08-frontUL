import React from "react";
import { useFormContext } from "react-hook-form";

export const StepPersonalData = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Nombre
        </label>
        <input
          id="nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          {...register("nombre", { required: "El nombre es requerido" })}
        />
        {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
          DNI
        </label>
        <input
          id="dni"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          {...register("dni", { required: "El DNI es requerido" })}
        />
        {errors.dni && <p className="text-red-500 text-xs italic">{errors.dni.message}</p>}
      </div>
    </div>
  );
};
