 import { useState } from "react";
  

 const Counter =() =>{
console.log("Counter component");
let [count, setCount] = useState(0);
return(

<div>
<h1>❤️<sup>{count}</sup></h1>
<h1>Counter {count}</h1>
<button onClick={()=> setCount(count+1)}>increment</button>
<button onClick={() => { if (count > 0) setCount(count - 1); }}>Decrement</button>
    <button onClick={()=>setCount(0)}>reset</button>


</div>

);


 };
 export default Counter;