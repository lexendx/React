import { createRoot } from "react-dom/client";
import App from "./App"; 
let div = document.querySelector('#root');
createRoot(div).render(<App></App>);