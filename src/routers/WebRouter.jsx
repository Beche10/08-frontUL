import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { App } from "../App";
import { Form } from "../components/Form";
import { AdminRouter } from "./AdminRouter";

export const WebRouter = () => {
  return (
   
   <BrowserRouter>
   <Routes>
    
      <Route path="/" element={<App />} />
      <Route path="/afiliarme" element={<Form />} />
      
    </Routes>
    </BrowserRouter>
  );
};
