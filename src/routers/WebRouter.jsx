import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { App } from "../App";
import { Form } from "../components/Form";
import { Home } from "../admin/Home";
import { Help } from "../components/Help";
import { NotFound } from "../helpers/NotFound";
import { LayoutAdmin } from "../layoutAdmin.jsx/LayoutAdmin";
import { LayoutAuth } from "../layoutAdmin.jsx/LayoutAuth";
import { Login } from "../auth/Login";

export const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/afiliarme" element={<Form />} />
        <Route path="/ayuda" element={<Help />} />

        <Route path="/login" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">inicio</Link>
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
      </ul>
    </nav>
  );
}
