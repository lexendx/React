import React from "react";
const ChildB =({Display})=>{
    return(
        <div>
            <p>I am ChildB</p>
            <button onClick ={Display}>Click</button>
        </div>
    );
};
export default ChildB;