import React from "react";
class Five extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
    };
  }
  render() {
    const bio = this.state.display ? (
      <div>
        <h2>We are learning React</h2>
      </div>
    ) : null;
    return (
      <div className="five">
        <h1>Conditional Rendering</h1>
        <br />
        <h2>Welcome from mayur.</h2>
        <button onClick={() => this.setState({ display: !this.state.display })}>
          click to toggle
        </button>

        {bio}
      </div>
    );
  }
}

export default Five;
