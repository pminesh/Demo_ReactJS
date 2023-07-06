import React from "react";
import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoute = () => {
    const isLogin = localStorage.getItem('isLogin');

    return isLogin === "true" ? <Outlet/>: <Navigate to="/"/>

}

export default ProtectedRoute;