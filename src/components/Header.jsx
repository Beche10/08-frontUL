import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { Link } from "react-router-dom";



export const Header = () => {


  return (
    <header className="font-bold h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-x-2">
        <button className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
          <RiNotification3Line />
          <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] text-white rounded-full text-[9px] box-content font-bold">
            2
          </span>
        </button>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              <img
                src="/logoHD.jpg"
                alt="Logo"
                className="w-7 h-7 object-cover rounded-full"
              />
              <span>Usuario</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
          theming="dark"
        >
          <MenuItem>
            <Link
              to="/perfil"
              className="rounded-lg transition-colors text-gray-300 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="/logoHD.jpg"
                alt="Logo"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Usuario</span>
                <span className="text-xs text-gray-500">admin@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem>
            <Link
              to="/perfil"
              className="rounded-lg transition-colors text-gray-300 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};
