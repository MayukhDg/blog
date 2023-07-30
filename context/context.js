"use client";

import { useState, createContext } from "react";

export const User_data = createContext();


const Context = ({children})=>{
 const [ user, setUser ] = useState({});

 return (
    <User_data.Provider value={{user, setUser}} >
        { children }
    </User_data.Provider>
 )
 } 


 export default Context;