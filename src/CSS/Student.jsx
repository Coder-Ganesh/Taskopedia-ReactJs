
export default function Students(props) {
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-1">
          <img src={props.headshot} className="w-100"></img>
        </div>
        <div className="col-8">
          {props.name} <br />
          Coding Knowledge {props.experience} years
        </div>
        <div className="col-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}
