"use client";


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


 export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };



const Home = () => {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const router  = useRouter();

 


  const handleClick = async(e)=>{
    e.preventDefault();
   try {
    const response = await fetch("api/signup",{
      method:"POST",
      body:JSON.stringify({
        name, email,password,image
      })
      
      
    
      
    })
  if(response.ok){
    router.push("/login")
  }
   
  
  } 
   
   catch (error) {
    console.log(error.message);
   }
  } 
  
  
 

    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setImage(base64);
    };
    
     
  
  return (
    <section className='h-[100vh] bg-black flex justify-center items-center' >
     <div className='w-3/5 bg-gray-500 flex flex-col text-center items-center gap-3 py-3 px-2 ' >
      <input placeholder='name' value={name} onChange={e=>setName(e.target.value)}   />
      <input type='email' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}   />
      <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}   />
      <input type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)} />
      <button onClick={handleClick} >Submit</button>
      
      </div> 
    </section>
  )
}

export default Home;