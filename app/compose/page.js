"use client";

import React, { useState, useContext } from 'react'
import { useRouter } from 'next/navigation';
import { convertToBase64 } from '../page';
import { User_data } from '@/context/context';


const Compose = () => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  const id = localStorage.getItem("user");
  const {  user, setUser} = useContext(User_data);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };
  
    
  const handleClick = async()=>{
   try {
    const response = await fetch("api/blog/new", {
       method:"POST",
       body:JSON.stringify({
        title, content, creator:user._id, image
       }) 
    })

    if(response.ok){
    router.push(`user/${id}`)
    }
   } catch (error) {
    console.log(error);
   }
  } 
  
  return (
    <section>
        <input value={title} onChange={e=>setTitle(e.target.value)}  />
        <input value={content} onChange={e=>setContent(e.target.value)}  />
        <input type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)} />
        <button onClick={handleClick} >Add Blog</button>
    </section>
  )
}

export default Compose;