import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { Header } from "../components/Header";

export const LayoutAdmin = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6 text-white">
      <SideBar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90%] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
