import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({isLogin}) {
  return isLogin ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoute