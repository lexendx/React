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
const App = ()=>{
return(
    <div>
<h1>I am App Component</h1>
{/*<Navbar/>
<NavbarCBC/>  
<States/>
<Counter/>*/}
{/* <Parent/>
<PropsDrillingParent></PropsDrillingParent> */}
{/* <InlineCss></InlineCss>
<Footer></Footer>
<Profile></Profile> */}
<Navbar1></Navbar1>
    </div>
);


};
export default App;