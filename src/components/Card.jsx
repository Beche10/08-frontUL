import React, { useState } from "react";
import { GiLion } from "react-icons/gi";
import { RiMore2Fill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

export const Card = () => {
  const [display, setDisplay] = useState("arrow");

  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <GiLion className="text-4xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl" />
        </div>
        <div>
          <Menu
            menuButton={
              <MenuButton
                onClick={handleMenuToggle}
                className="flex items-center gap-x-2 p-2 hover:bg-secondary-900 rounded-lg transition-colors duration-500"
              >
                <RiMore2Fill className="" />
              </MenuButton>
            }
            transition
            theming="dark"
            arrow={display === "arrow"}
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/admin/perfil"
                className="rounded-lg transition-colors text-gray-300 flex items-center gap-x-4 p-2 flex-1"
              >
                Ver todos
              </Link>
            </MenuItem>
          </Menu>
        </div>
        {/* TOTAL DE AFILIADOS */}
        <div>
          <h1 className="text-4xl text-white font-bold mb-4">1400</h1>
          <p>Afiliados totales</p>
        </div>
      </div>
    </div>
  );
};


