import {useEffect} from 'react'

const SideEffect=()=> {
    
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
    },[]);

  return (
    <div>
        <h1>SideUffect</h1>
        </div>
  )
}

export default SideEffect