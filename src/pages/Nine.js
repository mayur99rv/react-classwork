import React from "react";
class Nine extends React.Component {
  updateTime = () => {
    this.forceUpdate();
  };
  render() {
    return (
      <div className="nine">
        <h1> Force Update example </h1> <br />
        <h2>Current time is : {new Date().toLocaleTimeString()}</h2>
        <button onClick={this.updateTime}>Update Time</button>
      </div>
    );
  }
}

export default Nine;
