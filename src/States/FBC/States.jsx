import { useState } from "react";
const States= ()=>{
    let[state, setState] = useState("hello");
    function btnClick() {
        console.log("button clicked");
        setState("Byee");
    } 
return(

<div>
<h1>States in FBC {state}</h1>
<button onClick={btnClick}>Click</button>


</div>


);



};
 export default States;