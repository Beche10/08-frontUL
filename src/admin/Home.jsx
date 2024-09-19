import React from "react";
//import { IconName } from "react-icons/ri";
import { GiLion } from "react-icons/gi";

export const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div>
        {/* CARD */}
        <div>
        
            <GiLion className="text-4xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl" />
          
        </div>
      </div>
    </div>
  );
};
