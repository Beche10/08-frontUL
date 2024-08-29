import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { SignatureForm } from './SignatureForm';

export const ParentComponent = () => {
  const methods = useForm();

  const onSubmit = async (data) => {
    const afiliadosURL = "http://localhost:8080/api/afiliados";
    
    // Asegúrate de que todos los datos requeridos estén en el objeto `data`
    const formData = {
      nombre: data.nombre,
      dni: data.dni,
      correo: data.correo,
      fechaNacimiento: data.fechaNacimiento,
      domicilio: data.domicilio,
      celular: data.celular,
      pais: data.pais,
      provincia: data.provincia,
      departamento: data.departamento,
      estadoCivil: data.estadoCivil,
      ocupacion: data.ocupacion,
      aceptaTerminos: data.aceptaTerminos,
      firma: data.firma,
      // Aquí podrías agregar otros campos si es necesario
    };

    try {
      const response = await fetch(afiliadosURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Formulario enviado con éxito.');
        // Aquí podrías hacer algo más, como mostrar un mensaje de éxito
      } else {
        const errorData = await response.json();
        console.error('Error al enviar el formulario:', errorData);
        // Aquí podrías mostrar un mensaje de error
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Aquí podrías mostrar un mensaje de error en caso de problemas con la red
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SignatureForm
          register={methods.register}
          errors={methods.formState.errors}
          setValue={methods.setValue}
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
