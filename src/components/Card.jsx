import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
//import { GiLion } from "react-icons/gi";
//import { RiMore2Fill } from "react-icons/ri";

export const Card = (props) => {
    const {
        icon: IconComponent,  // Ícono dinámico
        mainStat,  // Número principal, como afiliados o seguidores
        description,  // Descripción debajo del número (ej: "Afiliados totales")
        growth,  // Porcentaje de crecimiento
        isGrowthPositive,  // Indica si el crecimiento es positivo o negativo
        link  // Link dinámico
      } = props;

  {/* Funcionalidad de menú */}
  const [display, setDisplay] = useState("arrow");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleMenuToggle = () => {setShowSubMenu((prev) => !prev);
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl  relative">
      {/* Icono del lado izquierdo */}
      <GiLion className="text-4xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl absolute top-4 left-4" />

      {/* Menú en el lado derecho */}
      <div className="absolute top-4 right-4">
        <Menu
          menuButton={
            <MenuButton
              onClick={handleMenuToggle}
              className="flex items-center gap-x-2 p-2 hover:bg-secondary-900 rounded-lg transition-colors duration-500"
            >
              <RiMore2Fill />
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

      {/* Total de Afiliados centrado */}
      <div className="flex flex-col items-center justify-center h-40">
        <h1 className="text-4xl text-white font-bold">145,000</h1>
        <p className="text-white">Afiliados totales</p>
      </div>
    </div>
  );
};
