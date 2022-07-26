import React from "react";
class Ten extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  updateTime() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div className="seven">
        <h1> Lifecycle methods Demo </h1>
        <br /> <br />
        <h2> Current time is : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Ten;
