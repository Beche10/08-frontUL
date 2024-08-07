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
      <nav className="flex items-center gap-x-4">
        <button className="relative">
          <RiNotification3Line />
          <span className="absolute -top-2 -right-2 bg-primary py-0.5 px-[5px] text-white rounded-full text-[10px] font-bold box-content">2</span>
        </button>
        <button className="flex items-center gap-x-2">
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
