import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Foot from "./components/footer"
import Foot1 from "./components/footer1"
ReactDOM.render(
 <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
   <Foot />
   <Foot1 />
   </React.StrictMode>,
   document.getElementById('root1')
 );