import React from "react"; //No Longer needed from React 18
import ReactDOM from "react-dom/client";
import "./CSS/Style.css";
import Header from "./CSS/Header.jsx";
import Students from "./CSS/Student.jsx";
import MainBody from "./CSS/MainBody.jsx";
import Footer from "./CSS/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="Container">
    <Header></Header>
    <MainBody></MainBody>
    <div className="row">Students Enrolled</div>
    <Students experience={2} name="Kris Walley"></Students>
    <Students experience={5} name="Angel Patricia"></Students>
    <Students experience={7} name="Rene Parker"></Students>
    <Footer></Footer>
  </div>
);