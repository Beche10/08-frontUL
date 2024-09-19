import React from "react";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* CARD */}
        <Card />
      </div>
    </div>
  );
};
