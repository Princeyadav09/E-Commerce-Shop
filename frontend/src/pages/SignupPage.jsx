import React, { useEffect } from 'react'
import Signup from '../components/Signup/Signup.jsx'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state)=>state.user);
  useEffect(()=>{
    if(isAuthenticated===true){
      navigate("/");
    }
  },[])
  return (
    <div>
      <Signup></Signup>
    </div>
  )
}

export default SignupPage
