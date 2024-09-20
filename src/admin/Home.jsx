import React from "react";
import { Card } from "../components/Card";
import { GiLion } from "react-icons/gi";

export const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* CARD */}
        <Card
          icon={GiLion}
          mainStat="145,000"
          description="Afiliados totales"
          growth={5.2}
          isGrowthPositive={true}
          link="/admin/perfil"
        />
      </div>
    </div>
  );
};
