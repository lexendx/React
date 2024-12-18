import {useEffect, useState} from 'react'

const SideEffect=()=> {
    let [count, setCount]=useState(0);

    //Syntax of useEffect
    // useEffect(()=>{},[]);
    //render
    useEffect(()=>{
        console.log("render");
    });
    //componentDidMount
    useEffect(()=>{
        console.log("COMPONENT MOUNTED")
    },[]);
//componentDidUpdated
    useEffect(()=>{
        console.log("COMPONENT Updated")
    
    return()=>{//get snapshot beforeupdate
        console.log("prev state was",count);
    }; },[count]
);

  return (
    <div>
        <h1>SideUffect</h1>
        <h2>Counter {count}</h2>
     
        </div>
  )
}

export default SideEffect