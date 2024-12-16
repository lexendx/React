import { useRef } from "react";

const UncontrolledForm=()=> {
    let UsernameRef=useRef();
    let emailRef=useRef();
    let PasswordRef=useRef();

    let formSubmit=(e)=>{
        e.preventDefault();
    //     console.log(UsernameRef.current.value);
    //     console.log(emailRef.current.value);
    //     console.log(PasswordRef.current.value);
    // 
let user={
    username:UsernameRef.current.value,
    email:emailRef.current.value,
Password:PasswordRef.current.value,
};  
console.log(user);

};
  return (
    <div>
        <form>
<label>Username</label>
<input type="text" ref={UsernameRef}/>
<br/>
<br/>
<label>Email</label>
<input type="email" ref={emailRef}/>
<br/>
<br/>
<label>Password</label>
<input type="text" ref={PasswordRef}/>
<br/>
<br/>
<button type="Submit" onSubmit={formSubmit}>Submit</button>




        </form>
    </div>
  )
}

export default UncontrolledForm