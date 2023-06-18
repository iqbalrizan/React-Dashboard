import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Inventory from '../pages/Inventory'
import Customers from '../pages/Customers'
import Orders from '../pages/Orders'

const AppRouter = () => {
  return (
    <div className='approuter'>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path= "/customers" element={<Customers />} />
            <Route path= "/orders" element={<Orders />} />
        </Routes>
    </div>
  )
}

export default AppRouter