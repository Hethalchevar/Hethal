import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate=useNavigate()
  const isAuthenticated=localStorage.getItem('token') !== null;

  useEffect(()=>{
    if(!isAuthenticated){
      navigate('/login')
    }
  })
  return (
    <div>
        
        <Header/>
        <br/><br/>
      <h1>WELCOME</h1>
      <p style={{paddingLeft:"100px"}}>To Shopping Website</p>
      
    </div>
  )
}
