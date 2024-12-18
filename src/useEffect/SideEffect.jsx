import {useEffect} from 'react'

const SideEffect=()=> {
    //Syntax of useEffect
    // useEffect(()=>{},[]);
    useEffect(()=>{
        console.log("render");
    });
    useEffect(()=>{
        console.log("COMPONENT MOUNTED")
    },[]);
  return (
    <div>
        <h1>SideUffect</h1>
        </div>
  )
}

export default SideEffect