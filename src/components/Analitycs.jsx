import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";
import { GiLion } from "react-icons/gi";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { stringify } from "postcss";

export const Analitycs = () => {
  const [numAfiliados, setNumAfiliados] = useState(0); // Estado para el número de afiliados
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para obtener los mensajes según la página
  useEffect(() => {
    const totalAfiliados = async () => {
      setLoading(true);
      try {
        // Petición GET al backend para obtener el total de afiliados
        const response = await axios.get("http://localhost:8080/api/afiliados");
        const { numAfiliados } = response.data;

        setNumAfiliados(numAfiliados); // Guardamos el número de afiliados
      } catch (error) {
        console.error("Error al obtener los afiliados:", error);
        setError("Error al obtener los afiliados");
      } finally {
        setLoading(false);
      }
    };

    totalAfiliados();
  }, [numAfiliados]); 

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
            mainStat={numAfiliados}
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
