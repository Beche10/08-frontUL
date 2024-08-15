import React, { useState } from "react";

import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <h1 className="text-xl text-gray-100">Profile</h1>
      <hr className="my-8 border-gray-500" />
      <form>
        <div className="flex items-center">
          <div className="w-1/4">
            <p>Avatar</p>
          </div>
          <div className="flex-1">
            <div className="relative mb-2">
              <img
                className="w-28 h-28 object-cover rounded-lg"
                src="/logoHD.jpg"
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
              Allowed fyle types: png, jpg, jpeg.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/4">
            <p>Nombre completo</p>
          </div>
          <div className="flex-1 flex items-center gap-4 ">
            <div className="w-full">
              <input className="w-full focus-input" type="text" />
            </div>
            <div className="w-full">
              <input className="focus-input" type="text" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
