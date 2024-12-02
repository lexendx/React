//here data is being recieved from parent through props keyword

const ChildA =(props)=>{
console.log(props);
return(
<div>
    {/*inside props object the data is being parent inside x:key*/}
<h1>{props.abc}</h1>

</div>



);

};
export default ChildA;