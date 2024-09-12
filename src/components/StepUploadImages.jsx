import React from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";

export const StepUploadImages = () => {
  const { register, setValue, formState: { errors } } = useFormContext();

  const onDropDniFrente = (acceptedFiles) => {
    setValue("dniFrente", acceptedFiles);
  };

  const onDropDniDorso = (acceptedFiles) => {
    setValue("dniDorso", acceptedFiles);
  };

  const { getRootProps: getRootPropsFrente, getInputProps: getInputPropsFrente } = useDropzone({
    onDrop: onDropDniFrente
  });

  const { getRootProps: getRootPropsDorso, getInputProps: getInputPropsDorso } = useDropzone({
    onDrop: onDropDniDorso
  });

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Imagen del DNI (Frente)</label>
        <div {...getRootPropsFrente()} className="border-dashed border-2 border-gray-500 p-4">
          <input {...getInputPropsFrente()} {...register("dniFrente", { required: "La imagen del DNI es requerida" })} />
          <p>Arrastra la imagen aquí o haz clic para seleccionar un archivo</p>
        </div>
        {errors.dniFrente && <p className="text-red-500 text-xs italic">{errors.dniFrente.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Imagen del DNI (Dorso)</label>
        <div {...getRootPropsDorso()} className="border-dashed border-2 border-gray-500 p-4">
          <input {...getInputPropsDorso()} {...register("dniDorso", { required: "La imagen del DNI es requerida" })} />
          <p>Arrastra la imagen aquí o haz clic para seleccionar un archivo</p>
        </div>
        {errors.dniDorso && <p className="text-red-500 text-xs italic">{errors.dniDorso.message}</p>}
      </div>
    </div>
  );
};
