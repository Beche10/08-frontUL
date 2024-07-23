import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { App } from "../App";
import { Form } from "../components/Form";
import { Home } from "../admin/Home";
import { Auth } from "../admin/Auth";

export const WebRouter = () => {
  return (
   
   <BrowserRouter>
   <Routes>
    
      <Route path="/" element={<App />} />
      <Route path="/afiliarme" element={<Form />} />
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      
    </Routes>
    </BrowserRouter>
  );
};
