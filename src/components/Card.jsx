import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { RiMore2Fill, RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri"; // Íconos para el menú y crecimiento

export const Card = (props) => {
  const {
    icon: IconComponent, // Ícono dinámico
    mainStat, // Número principal, como afiliados o seguidores
    description, // Descripción debajo del número (ej: "Afiliados totales")
    growth, // Porcentaje de crecimiento
    isGrowthPositive, // Indica si el crecimiento es positivo o negativo
    link, // Link dinámico
  } = props;

  {/* Funcionalidad de menú */}
  const [display, setDisplay] = useState("arrow");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl relative">
      {/* Icono del lado izquierdo */}
      <IconComponent className="text-4xl p-2 box-content rounded-xl absolute top-4 left-4" />

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
              to={link} // Link dinámico pasado como prop
              className="rounded-lg transition-colors text-gray-300 flex items-center gap-x-4 p-2 flex-1"
            >
              Ver todos
            </Link>
          </MenuItem>
        </Menu>
      </div>

      {/* Estadística principal y descripción */}
      <div className="flex flex-col items-center justify-center h-40">
        <h1 className="text-4xl text-white font-bold">{mainStat}</h1>
        <p className="text-white">{description}</p>
      </div>

      {/* Indicador de Crecimiento */}
      <div className="flex items-center justify-center mt-4">
        <p
          className={`text-lg ${
            isGrowthPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isGrowthPositive ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
          {growth}%
        </p>
        <p className="ml-2 text-sm text-gray-400">Crecimiento</p>
      </div>
    </div>
  );
};

{
  /* Total de Afiliados centrado 
      <div className="flex flex-col items-center justify-center h-40">
        <h1 className="text-4xl text-white font-bold">145,000</h1>
        <p className="text-white">Afiliados totales</p>
      </div>
    </div>

  );
};
*/
}
