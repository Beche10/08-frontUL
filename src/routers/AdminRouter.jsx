import React from "react";
import { Routes, Route } from "react-router-dom";
import { Index } from "../admin/Index";
import { Auth } from '../admin/Auth';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
