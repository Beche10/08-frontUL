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
  RiMessage2Line,
} from "react-icons/ri";

export const SideBar = () => {
  return (
    <div className="xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-center text-2xl font-bold text-white mb-10">
          Admin<span className="text-primary text-4xl">.</span>
        </h1>
        <ul>
        <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiBarChart2Line className="text-primary" /> Analíticas
              </Link>
            </li>

          <li>
            <button
              to="/"
              className="w-full flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
                <span className="flex items-center gap-4">
                <RiEarthLine className="text-primary" /> Social Media
                </span>
                <RiArrowRightSLine className="mt-1"/>
              
            </button>
            <ul className="my-2 hidden">
              <li>
                <Link
                  to="/"
                  className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                >
                  Social Post
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                >
                  Social Statistic
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-primary transition-colors"
                >
                  Followers
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiMessage2Line className="text-primary" />
              Messanges
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiCalendarTodoLine className="text-primary" />
              Calendar
            </Link>
          </li>
        </ul>
      </div>
      <nav>
        <Link
          to="/"
          className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
        >
          <RiLogoutCircleRLine className="text-primary" />
          Cerrar sesión
        </Link>
      </nav>
    </div>
  );
};
