import React, { useState } from "react";

import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      {/* Profile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="/logoHD.jpg"
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-gray-500 text-sm">
                Allowed file types: png, jpg, jpeg.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 rounded-lg focus-input-3"
                  placeholder="Nombre(s)"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 rounded-lg focus-input-3"
                  placeholder="Apellido(s)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Departamento <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 rounded-lg focus-input-3 appearance-none">
                <option disabled>Seleccione un departamento</option>
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
                <option value="Fray Mamerto Esquiú">Fray Mamerto Esquiú</option>
                <option value="La Paz">La Paz</option>
                <option value="Paclín">Paclín</option>
                <option value="Pomán">Pomán</option>
                <option value="Santa María">Santa María</option>
                <option value="Santa Rosa">Santa Rosa</option>
                <option value="Tinogasta">Tinogasta</option>
                <option value="Valle Viejo">Valle Viejo</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-lg focus-input-3"
                placeholder="(383)-154317171"
              />
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* Change Password */}

      <div className="bg-secondary-100 p-8 rounded-xl">
        <h1 className="text-xl text-gray-100">Reestablecer contraseña</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Correo electrónico</h5>
              <p className="text-gray-500 text-sm">unionlibertaria@gmail.com</p>
            </div>
            <div>
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-gray-100">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Contraseña</h5>
              <p className="text-gray-500 text-sm">******************</p>
            </div>
            <div>
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-gray-100">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 bg-[#4682B4]/20 p-4 rounded-lg border border-dashed border-bg-[#4682B4]/40">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl"/>
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl">Asegura tu cuenta</h5>
            <p className="text-gray-500">
              {" "}
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in you'll need to provide a 4 digit amazing
              code.
            </p>
          </div>
          <div>
            <button className="bg-[#4682B4]/70 hover:bg-[#4682B4] transition-colors py-2 px-4 rounded-lg text-gray-100">Activar</button>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div> */
}
