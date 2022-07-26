import React from "react";
class Eight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "mayur" };
  }
  updateName = () => {
    this.setState({ name: "mayur vaswani" });
  };
  render() {
    return (
      <div className="eight">
        <h1>setState demo</h1> <br />
        <h2>My name is : {this.state.name}</h2>
        <button onClick={() => this.updateName()}>Update Name</button>
      </div>
    );
  }
}

export default Eight;
