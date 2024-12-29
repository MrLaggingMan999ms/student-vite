import React from 'react'
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const LogIn = () => {
  const {isAuth} = useAuth();

  return (
    <>
      {
        isAuth ?
        <Navigate to={"/"}/> :
        <div>Login</div>
      }
    </>
  )
}

export default LogIn