// //here data is being recieved from parent through props keyword

// //const ChildA =(props)=>{
// //console.log(props);
// //return(
// //<div>
//     {/*inside props object the data is being parent inside x:key*/}
// //<h1>{props.abc}</h1>

// //</div>



// //);

// //};
// //export default ChildA;
// {/*const ChildA =(x)=>{
//     let{dbData}=x;//way 1
//     consolele.log(dbData);//{10,20,30,40}
//     return<div></div>
//     };
//     export default ChildA;*/}
//     // way 2 
//     function ChildA(prop) {
//         console.log(prop.dbData);
//         return(
//             <div></div>
//         )
//     }export default ChildA;
const ChildA=(x)=>{
console.log(x);
 let{propVal :{data,user:{id, ename}}}=x;
 console.log(data,id,ename);
 return(
    <div>
        <h3>Props Child</h3>
    </div>
 );

};
export default ChildA;