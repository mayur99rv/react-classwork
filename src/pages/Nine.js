import React from "react";
class Nine extends React.Component {
  updateTime = () => {
    this.forceUpdate();
  };
  render() {
    return (
      <>
        {" "}
        {/* // eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          href="https://github.com/mayur99rv/react-classwork/blob/master/src/pages/Nine.js"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
        <div className="nine">
          <h1> Force Update example </h1> <br />
          <h2>Current time is : {new Date().toLocaleTimeString()}</h2>
          <button onClick={this.updateTime}>Update Time</button>
        </div>
      </>
    );
  }
}

export default Nine;
