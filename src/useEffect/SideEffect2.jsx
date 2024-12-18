import React, { useEffect } from 'react'

const SideEffect2=()=> {
    useEffect(()=>{
        console.log("Mounted");
      let s1 =  setInterval(()=>{
            console.log("hello");
        },2000);
        return()=>{
            console.log("Unmounted");
            clearInterval(s1);
        };
    },[]);
  return (
    <div>
        <h1>SideEffect2</h1>
        
        </div>
  )
}

export default SideEffect2