import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { Form } from "../components/Form";

export const WebRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<App/>} />
      <Route path="/Afiliarme" element={<Form/>} />
    </Routes>
  );
};
