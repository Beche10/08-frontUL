import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export const LayoutAdmin = () => {
  return (
    <div className="min-h-screen grid grid-cols-6 text-white">
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
