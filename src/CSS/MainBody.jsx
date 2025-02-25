import React from "react";
import Students from "./Student.jsx";
import StudentReview from "./StudentReview.jsx";

class MainBody extends React.Component {
  render(){
  const whatWeWillLearn = "React Js";
  const totalLectureCount = 3;
  return (
    <div style={{minHeight: "70vh"}}>
      <p>
        In this course, we will learn {whatWeWillLearn} by building Taskopedia!
      </p>
      <p>Total Lecture - {totalLectureCount}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
        Enter Task : {" "}
        <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div> */}

<div className="container row">Students Enrolled</div>
    <Students
      experience={2}
      name="Kris Walley"
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    >
      <StudentReview></StudentReview>
    </Students>
    <Students
      experience={5}
      name="Angel Patricia"
      headshot="https://api.lorem.space/image/face?w=150&h=151"
    >
      <StudentReview></StudentReview>
    </Students>
    <Students
      experience={7}
      name="Rene Parker"
      headshot="https://api.lorem.space/image/face?w=150&h=152"
    ></Students>

    </div>
  );
}
}

export default MainBody