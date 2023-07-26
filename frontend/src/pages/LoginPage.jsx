import React, { useEffect } from 'react'
import Login from '../components/Login/Login'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state)=>state.user);
  useEffect(()=>{
    if(isAuthenticated===true){
      navigate("/");
    }
  },[])
  return (
    <div>
      <Login/>
    </div>
  )
}

export default LoginPage

