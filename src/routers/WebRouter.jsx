import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from '../App';



export const WebRouter = () => {
  
 
  return (
<Routes>
    
    <Route path="/Home" element={App}/>

</Routes>
  

  )
}