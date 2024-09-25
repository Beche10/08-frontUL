import React from "react";
import { Card } from "./Card";
import { GiLion } from "react-icons/gi";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Analitycs = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl text-white">Metricas</h1>
      </div>

      <div className="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-5">
        <div>
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

        <div>
          {/* CARD */}
          <Card
            icon={AiFillTikTok}
            mainStat="27,125"
            description="Seguidores totales"
            growth={1.2}
            isGrowthPositive={false}
            link="/admin/perfil"
          />
        </div>

        <div>
          {/* CARD */}
          <Card
            icon={FaInstagram}
            mainStat="11,332"
            description="Seguidores totales"
            growth={3.7}
            isGrowthPositive={true}
            link="/admin/perfil"
          />
        </div>

        <div>
          {/* CARD */}
          <Card
            icon={FaFacebook}
            mainStat="15,232"
            description="Seguidores totales"
            growth={8.4}
            isGrowthPositive={true}
            link="/admin/perfil"
          />
        </div>
      </div>
    </div>
  );
};
