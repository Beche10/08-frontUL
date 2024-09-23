import React from "react";
import { Card } from "../components/Card";
import { GiLion } from "react-icons/gi";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl text-white">Hola, despertamos leones?.</h1>
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
      <div>
        <h1 className="text-2xl text-white mb-5">Afiliados más recientes</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-5 p-2">
          <h5>N° de afiliado</h5>
          <h5>Nombre</h5>
          <h5>Ciudad</h5>
          <h5>Fecha</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-2 rounded-xl">
          <div>
            <h5 className="md:hidden">ID</h5>
            <span>#25546</span>
          </div>

          <div>
            <p>Carlos Peréz</p>
          </div>

          <div>
            <span>Capital</span>
          </div>

          <div>
            <span>23/09/2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-2 rounded-xl">
          <div>
            <h5 className="md:hidden">ID</h5>
            <span>#23849</span>
          </div>

          <div>
            <p>Juan Lopez</p>
          </div>

          <div>
            <span>Capital</span>
          </div>

          <div>
            <span>22/09/2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-2 rounded-xl">
          <div>
            <h5 className="md:hidden">ID</h5>
            <span>#25486</span>
          </div>

          <div>
            <p>Ignacio Barrionuevo</p>
          </div>

          <div>
            <span>Capital</span>
          </div>

          <div>
            <span>21/09/2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};
