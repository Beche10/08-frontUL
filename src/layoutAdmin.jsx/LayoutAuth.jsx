import React from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutAuth = () => {
  return (
    <div className='text-white'>
        LayoutAuth <Outlet/>
    </div>
  )
}
