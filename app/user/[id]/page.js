"use client";

import { User_data } from '@/context/context';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Details = ({params}) => {

  const { user, setUser } = useContext(User_data);
  const [blogs, setBlogs] = useState([]);
  const router = useRouter(); 
  const id = localStorage.getItem("user");
  console.log(blogs);

 const SignOut = ()=>{
  localStorage.removeItem("user");
  router.push("/");
 }

 useEffect(()=>{
  if(!id){
    router.push("/")
  }
 })

  
  const fetchBlogs = async()=>{
    const response = await fetch("/api/blog");
    const data = await response.json()
    return data;
   }

  
  useEffect(()=>{
   
   fetchBlogs().then(data=>setBlogs(data));
  
  
  
  },[id])
  
  useEffect(()=>{

  const fetchUserDetails = async()=>{
    const response = await fetch(`/api/user/userdetail/${params.id}`, { cache:'no-store'});
    const data = await response.json();
    return data;
    }
    


  fetchUserDetails().then(data=>setUser(data)).catch(error=>console.log(error));

},[params.id])  

return (
    <div>
   {  id === user._id &&
    <div className='flex gap-3 flex-wrap' >
  { blogs.map((blog, index)=>(
   <div key={index} className='flex flex-col   bg-gray-400 py-3' >
   <h3>{blog.title}</h3>
   <img alt={blog.title}  className='h-[330px] object-contain w-auto'  src={blog.image} />
   <p>{blog.content.slice(0,50)}</p>
   </div>

  )) }
    <button onClick={SignOut} >Sign Out</button>
    </div>
    
   }

    </div>
  )
}

export default Details;