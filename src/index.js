import { createRoot } from "react-dom/client";
import "./Global.css"
import App from "./App"; 
let div = document.querySelector('#root');
createRoot(div).render(<App></App>);