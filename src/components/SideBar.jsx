import React from "react";

export const SideBar = () => {
  return (
    <div className="xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-8">
      <div>
        <h1>
            Admin<span className="text-primary">.</span>
        </h1>
      </div>
    </div>
  );
};
