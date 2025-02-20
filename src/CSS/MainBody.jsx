export default function MainBody() {
  const whatWeWillLearn = "React Js";
  const totalLectureCount = 3;
  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building Taskopedia!
      </p>
      <p>Total Lecture - {totalLectureCount}</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
      {/* <div>
        Enter Task : {" "}
        <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div> */}
    </div>
  );
}
