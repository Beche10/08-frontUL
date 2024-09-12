import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StepPersonalData } from "./StepPersonalData";
import { StepUploadImages } from "./StepUploadImages";
import { SignatureForm } from "./SignatureForm"; // Asegúrate de que el nombre coincida
/*
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { SignatureForm } from "./SignatureForm";
*/

export const ParentComponent = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar el envío de datos al backend
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  /*
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
*/
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <StepPersonalData />} {/* Primer paso */}
        {step === 2 && <StepUploadImages />} {/* Segundo paso */}
        {step === 3 && (
          <SignatureForm
            register={methods.register}
            errors={methods.formState.errors}
            setValue={methods.setValue}
          />
        )}{" "}
        {/* Tercer paso */}
        <div className="mt-4">
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Atrás
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={nextStep}>
              Siguiente
            </button>
          )}
          {step === 3 && <button type="submit">Enviar</button>}
        </div>
      </form>
    </FormProvider>
    /*
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
 */
  );
};
