import ChildA from "./ChildA"
const parent =()=>{
    // it is name and value of props
    let data ="hello world";
return(
<div>
{/*here data pass through props in childa*/}
<childA acb = {data}/>
{/*we can also pass it like*/}
{/* <childa abc = "hello universe" */}
</div>


)
}
export default parent;