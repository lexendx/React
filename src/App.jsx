import Navbar from "./Components/Navbar";
import States from "./States/FBC/States";
import NavbarCBC from "./Components/NavbarCBC";
import Counter from "./States/FBC/Counter";
import Footer from "./ReactCss/Footer";
import Navbar1 from "./Task/Navbar1"

import Parent from "./Props/Parent";
import PropsDrillingParent from "./PropsDrilling/PropsDrillingParent";
import InlineCss from "./ReactCss/InlineCss";
import Profile from "./Images/Profile";
import ControlledForms1 from "./Components/forms/ControlledForms1";
import ControlledForms2 from "./Components/forms/ControlledForms2";
import TodoWrapper from "./TodoApp/TodoWrapper";
import RefExample from "./refc/RefExample";
import UncontrolledForm from "./Components/forms/UncontrolledForm";
import LifeCycle from "./LifeCycle/LifeCycle";
import { useState } from "react";
import SideEffect from "./useEffect/SideEffect";
import SideEffect2 from "./useEffect/SideEffect2";
import FetchApi from "./Fetch/FetchApi";
const App = ()=>{
    let [toggle, setToggle]=useState(false);


return(
    <div>
<h1></h1>
{/*<Navbar/>
<NavbarCBC/>  
<States/>
<Counter/>*/}
{/* <Parent/>
<PropsDrillingParent></PropsDrillingParent> */}
{/* <InlineCss></InlineCss>
<Footer></Footer>*/}
{/* <Navbar1></Navbar1> */}
{/* <Profile></Profile>  */}
{/* <ControlledForms1></ControlledForms1>  */}
{/* <ControlledForms2/> */}
{/* <TodoWrapper/> */}
{/* <RefExample/> */}
{/* <UncontrolledForm/> */}
{/* <button onClick={()=>setToggle(!toggle)}>Toggle Switch</button>
{toggle?<LifeCycle/>: <h1>No Component</h1>} */}
{/* <SideEffect/> */}
{/* <button onClick={()=>setToggle(!toggle)}>Toggle Me</button>
{toggle?<SideEffect2/>:<h1>No Component</h1>} */}
{/* <FetchApi/> */}
    </div>
);


};
export default App;