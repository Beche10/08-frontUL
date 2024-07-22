import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { Form } from "../components/Form";
import { AdminRouter } from "./AdminRouter";

export const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/afiliarme" element={<Form />} />
      <Route path="/admin/*" element={<AdminRouter />} />
    </Routes>
  );
};
