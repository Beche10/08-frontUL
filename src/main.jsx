import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { WebRouter, AdminRouter } from './routers'
import './tailwind.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <WebRouter />
    <AdminRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
