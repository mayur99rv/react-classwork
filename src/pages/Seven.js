import React from "react";

class Seven extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  render() {
    return (
      <div className="seven">
        <StateToProps date={this.state.data} />
      </div>
    );
  }
}

export default Seven;

class StateToProps extends React.Component {
  render() {
    return (
      <div>
        <h1> This is state to props example.</h1> <br />
        <h2> Current time is : {this.props.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}
