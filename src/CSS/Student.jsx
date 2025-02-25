import React from "react";

class Students extends React.Component {
  render(){
  return (
    <div className="col-4 p-1">
      <div className="row border">
        <div className="col-1">
          <img src={this.props.headshot} className="w-100"></img>
        </div>
        <div className="col-8">
          {this.props.name} <br />
          Coding Knowledge {this.props.experience} years
        </div>
        <div className="col-2">
          {this.props.children}
        </div>
      </div>
    </div>
  );
}
}

export default Students