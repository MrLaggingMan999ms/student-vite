import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectRoutes = () => {
  const {isAuth} = useAuth();
  return isAuth ? <Outlet/> : <Navigate to = {"/login"}/>;

}

export default ProtectRoutes