// import ChildA from "./ChildA"
// const Parent =()=>{
//     // it is name and value of props
//     let data ="hello world";
//     let dbData = [10,20,30,40];

import ChildA from "./ChildA";
import ChildB from "./ChildB";
    
// return(
// <div>
// {/*here data pass through props in childa*/}
// {/* <ChildA abc = {data} dbData={dbData}/> */}
// {/*we can also pass it like*/}
// {/* <childa abc = "hello universe" */}
// </div>


// )
// }
// export default Parent;
const Parent =()=>{
let dbData = [10,20,30,40];
let user={id : 1, ename: "john"}
function Display(){
    console.log("I am Display Function");
}
return(
    <div>
<h3>Props Parent</h3>
<ChildA propVal ={{dbData,user}}></ChildA>
<ChildB Display ={Display}></ChildB>
    </div>
);


};
export default Parent;