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
import { Profile } from "../admin/Profile";




export const WebRouter = () => {
  return (
    <BrowserRouter basename="/08-frontUL">
      <Routes>
        <Route path="/" element={<App />} />
             
        <Route path="/login" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPassword />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
        </Route>

        <Route path="/afiliarme" element={<Form />} />
        <Route path="/ayuda" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

