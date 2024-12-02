import Navbar from "./Components/Navbar";
import States from "./States/FBC/States";
import NavbarCBC from "./Components/NavbarCBC";
import Counter from "./States/FBC/Counter";
import ChildA from "./Props/ChildA";
const App = ()=>{
return(
    <div>
<h1>I am App Component</h1>
<Navbar/>
<NavbarCBC/>
<States/>
<Counter/>
<ChildA/>
    </div>
);


};
export default App;