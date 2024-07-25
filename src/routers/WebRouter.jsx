import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { App } from "../App";
import { Form } from "../components/Form";
import { Home } from "../admin/Home";
import { Auth } from "../admin/Auth";
import { Dashboard } from "../admin/Dashboard";
import { Help } from "../components/Help";

export const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/afiliarme" element={<Form />} />
        <Route path="/ayuda" element={<Help />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/afiliarme">Afiliarme</Link>
        </li>
        <li>
          <Link to="/ayuda">Ayuda</Link>
        </li>
        <li>
          <Link to="/home">Home-Admin</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
