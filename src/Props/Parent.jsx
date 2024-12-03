import ChildA from "./ChildA"
const Parent =()=>{
    // it is name and value of props
    let data ="hello world";
    let dbData = [10,20,30,40];
    
return(
<div>
{/*here data pass through props in childa*/}
<ChildA abc = {data} dbData={dbData}/>
{/*we can also pass it like*/}
{/* <childa abc = "hello universe" */}
</div>


)
}
export default Parent;