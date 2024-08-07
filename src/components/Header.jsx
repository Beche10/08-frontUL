import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";

export const Header = () => {
  return (
    <header className="font-bold h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-x-2">
        <button className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
          <RiNotification3Line />
          <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] text-white rounded-full text-[9px] box-content font-bold">2</span>
        </button>
        <button className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
          <img
            src="/logoHD.jpg"
            alt="Logo"
            className="w-6 h-6 object-cover rounded-full"
          />
          <span>Usuario</span>
          <RiArrowDownSLine/>
        </button>
      </nav>
    </header>
  );
};
