import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../admin/Home";
import { Auth } from '../admin/Auth';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
