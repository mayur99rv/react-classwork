import React from "react";
class Six extends React.Component {
  render() {
    return (
      <>
        {/* // eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          href="https://github.com/mayur99rv/react-classwork/blob/master/src/pages/Six.js"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
        <div className="six">
          <h1> Default props demo:</h1> <br />
          <h2> {this.props.name}, welcomes you </h2>
          <h2> My age is {this.props.age} </h2>
          <h2> I live in {this.props.city} </h2>
          <h2> I work as {this.props.profession} </h2>
        </div>
      </>
    );
  }
}

export default Six;

Six.defaultProps = {
  name: "Mayur",
  age: "22",
  city: "Vadodara",
  profession: "Full Stack Engineer",
};
