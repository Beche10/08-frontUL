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
    <div className="xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-8 flex flex-col justify-between">
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
              <RiBarChart2Line className="text-primary" />
              Analytics
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiEarthLine className="text-primary" /> Social Media{" "}
            </Link>
            <ul className="">
              <li>
                <Link
                  to=""
                  className="py-2 px-4 border-l border-gray-500 ml-6 block"
                >
                  Social Post
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="py-2 px-4 border-l border-gray-500 ml-6 block"
                >
                  Social Statistic
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="py-2 px-4 border-l border-gray-500 ml-6 block"
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
