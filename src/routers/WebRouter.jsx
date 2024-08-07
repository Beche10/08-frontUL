import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { App } from "../App";
import { Form } from "../components/Form";
import { Home } from "../admin/Home";
import { Help } from "../components/Help";
import { NotFound } from "../helpers/NotFound";
import { LayoutAdmin } from "../layout/LayoutAdmin";
import { LayoutAuth } from "../layout/LayoutAuth";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { ForgetPassword } from "../auth/ForgetPassword";
import { ParentComponent } from "../components/ParentComponent ";



export const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parent" element={<ParentComponent />} />
        
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/afiliarme" element={<Form />} />
        <Route path="/ayuda" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/afiliarme">Afiliarme</Link>
        </li>
        <li>
          <Link to="/ayuda">Ayuda</Link>
        </li>
        <li>
          <Link to="/admin">Home-Admin</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/auth/registro">Registrarme</Link>
        </li>
        <li>
          <Link to="/auth/olvide-password">Recuperar contraseña</Link>
        </li>
        <li>
          <Link to="/parent">Parent Component</Link> 
        </li>
      </ul>
    </nav>
  );
}