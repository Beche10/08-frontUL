import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { SignatureForm } from "./SignatureForm";

export const ParentComponent = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
