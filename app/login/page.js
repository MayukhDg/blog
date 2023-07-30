
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter(); 


  const handleClick = async(e)=>{
   e.preventDefault();

   try {
    const response = await fetch("api/login", {
        method:"POST",
        body:JSON.stringify({
            email, password
        })
    })
   
    const user = await response.json();
    
    if(response.ok){
     router.push(`/user/${user._id}`)
     localStorage.setItem("user", user._id);
    }

   } catch (error) {
    
   }
  }
  
  
    return (
    <section className='h-[100vh] bg-black flex justify-center items-center' >
     <div className='w-3/5 bg-gray-500 flex flex-col text-center items-center gap-3 py-3 px-2 ' >
      <input type='email' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}   />
      <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}   />
      <button onClick={handleClick} >Login</button>
      
      </div> 
    </section>
  )
}

export default Login;