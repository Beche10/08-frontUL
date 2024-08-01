import React from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutAdmin = () => {
    return (
      <div className="text-white">
        LayoutAdmin 
        <Outlet />
      </div>
    );
  };