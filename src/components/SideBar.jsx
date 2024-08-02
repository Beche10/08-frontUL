import React from "react";
import { Link } from "react-router-dom";
import {
    RiBarChart2Line,
    RiEarthLine,
    RiCustomerService2Line,
    RiCalendarTodoLine,
    RiLogoutCircleRLine,
    RiArrowRightSLine,
    RiMenu3Line,
    RiCloseLine,
  } from "react-icons/ri";


export const SideBar = () => {
  
    return (
    <div className="xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-8">
      <div>
        <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin<span className="text-primary text-4xl">.</span>
        </h1>
        <nav>
           <Link to="/"><RiBarChart2Line />    </Link> 
        </nav>
      </div>
    </div>
  );
};
