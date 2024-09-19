import React, { useState } from "react";
import { GiLion } from "react-icons/gi";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
  RiMore2Fill,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [display, setDisplay] = useState("arrow");

  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div>
        {/* CARD */}
        <div>
          <GiLion className="text-4xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl" />

          <Menu
            menuButton={
              <MenuButton
                onClick={handleMenuToggle}
                className="flex items-center gap-x-2 p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-500"
              >
                <RiMore2Fill
                  className={`transition all duration-300 ${
                    showSubMenu ? "rotate-120" : "-rotate-90"
                  } `}
                />
              </MenuButton>
            }
            transition
            theming="dark"
            arrow={display === "arrow"}
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/admin/perfil"
                className="rounded-lg transition-colors text-gray-300 flex items-center gap-x-4 py-2 px-6 flex-1"
              >
                <img
                  src="/logoHD.jpg"
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div className="flex flex-col text-sm">
                  <span className="text-sm">Usuario</span>
                  <span className="text-xs text-gray-500">UL@gmail.com</span>
                </div>
              </Link>
            </MenuItem>
            <hr className="my-4 border-gray-500" />
          </Menu>
        </div>
      </div>
    </div>
  );
};
