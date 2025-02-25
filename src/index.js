import React from "react"; //No Longer needed from React 18
import ReactDOM from "react-dom/client";
import "./CSS/Style.css";
import Header from "./Layout/Header.jsx";

import MainBody from "./CSS/MainBody.jsx";
import Footer from "./Layout/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{backgroundColor:"black", color:"gray"}}>
    <Header></Header>
    <div className="px-4"></div>
    <MainBody></MainBody>
    <div></div>
    <Footer></Footer>
  </div>
);
