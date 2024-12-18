import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    let [dbData,setDbData]=useState(null)
    useEffect(()=>{
      async function fetchData(){
        let resp= await fetch(" https://api.github.com/users");
        let data = await resp.json();
        console.log(data);
        setDbData(data)

       }
       fetchData();
    },[])
    console.log(dbData);
  return (
    <div>FetchApi</div>
  )
}

export default FetchApi