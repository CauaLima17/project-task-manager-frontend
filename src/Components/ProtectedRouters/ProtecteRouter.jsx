import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtecteRouter = ({ element }) => {
  const token = localStorage.getItem('userToken');

  if (!token) {
    return <Navigate to='/' replace />
  }
  return element;
}

export default ProtecteRouter
