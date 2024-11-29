import { useState } from "react";
const States= ()=>{
    let[state, setState] = useState("hello");
    let[cart, setCart] = useState("Add to Cart");
    console.log(state);
    function btnClick() {
        console.log("button clicked");
        setState("Byee");
    } 
return(

<div>
<h1>States in FBC {state}</h1>
<button onClick={btnClick}>Click</button>
<button onClick={()=>{setCart("go to cart")}}>{cart}</button>


</div>


);



};
 export default States;