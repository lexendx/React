import Navbar from "./Components/Navbar";
import States from "./States/FBC/States";
import NavbarCBC from "./Components/NavbarCBC";
import Counter from "./States/FBC/Counter";

import Parent from "./Props/Parent";
const App = ()=>{
return(
    <div>
<h1>I am App Component</h1>
{/*<Navbar/>
<NavbarCBC/>  
<States/>
<Counter/>*/}
<Parent/>
    </div>
);


};
export default App;