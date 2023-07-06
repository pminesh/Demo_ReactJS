import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../screens/login/Login'
import SignUp from '../screens/registration/Registration'
import Dashboard from '../screens/dashboard/Dashboard'
import ProtectedRoute from './Protected-Route'
import User from '../screens/user/User'
import Scene from '../screens/scene/Scene'
import Trigger from '../screens/trigger/Trigger'
import Area from '../screens/area/Area'
import Device from '../screens/device/Device'
import RazorpayPayment from '../screens/razorpay/razorpay'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route index path='/registration' element={<SignUp />} />
                <Route path="" element={<ProtectedRoute />}>
                    <Route index path='/dashboard' element={<Dashboard />} />
                    <Route index path='/user' element={<User />} />
                    <Route index path='/scene' element={<Scene />} />
                    <Route index path='/trigger' element={<Trigger />} />
                    <Route index path='/area' element={<Area />} />
                    <Route index path='/device' element={<Device />} />
                    <Route index path='/payment' element={<RazorpayPayment />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;