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
      
      <form>
        <div>
          <h5 className="text-gray-100 text-xl">Correo electrónico</h5>
          <p className="text-gray-500 text-sm">unionlibertaria@gmail.com</p>
        </div>


      </form>
    
      <hr className="my-8 border-gray-500/30" />
      <div className="flex justify-end">
        <button className="bg-primary/80 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors">
          Guardar
        </button>
      </div>
    </div>

    </>
  );
};
