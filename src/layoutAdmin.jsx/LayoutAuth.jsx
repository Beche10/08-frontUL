import React from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutAuth = () => {
  return (
    <div className='bg-secondary-900 min-h-screen flex items-center justify-center text-white'>
        <Outlet/>
    </div>
  )
}
