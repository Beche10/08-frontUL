import React, { useState } from "react";

import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
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
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg focus-input-3"
              placeholder="El Alto, La Paz, etc."
            />
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
    </div>
  );
};
