import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "../admin/Auth";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<Auth/>} />
    </Routes>
  );
};
