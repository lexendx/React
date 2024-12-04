const ChildC =({setterFun})=>{
let data ="this is ChildC"
return(

<div>
    this is child c component
    <button onClick={()=> setterFun(data)}>click to send data from child function</button>
</div>

)

}
export default ChildC;