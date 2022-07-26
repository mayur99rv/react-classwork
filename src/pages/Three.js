import React from "react";
class Three extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "beige" }}>
        <First />
        <br />
        <Second />
      </div>
    );
  }
}

export default Three;

class First extends React.Component {
  render() {
    return (
      <div style={{ border: "0px solid black" }}>
        <h1
          style={{
            color: "violet",
            fontSize: "40px",
            textAlign: "center",
            paddingTop: "10vh",
          }}
        >
          Hello, this is my first class component
        </h1>
      </div>
    );
  }
}

class Second extends React.Component {
  render() {
    return (
      <div>
        <h1
          style={{
            color: "black",
            fontSize: "40px",
            textAlign: "center",
            marginTop: "10vh",
          }}
        >
          Hello, this is my second class component with an image
        </h1>
        <div
          style={{ width: "40%", margin: "0 auto", padding: "2vh 0 10vh 0" }}
        >
          <img
            style={{ width: "100%", borderRadius: "5%" }}
            src="./6.jpg"
            alt="castle"
          />
        </div>
      </div>
    );
  }
}
