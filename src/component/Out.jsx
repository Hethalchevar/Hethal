import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function Out() {
  let navigate=useNavigate()
  useEffect(()=>{
    localStorage.removeItem('token');
    navigate('/login')
  })
  return (
    <div>
      <Header/>
    </div>
  )
}
