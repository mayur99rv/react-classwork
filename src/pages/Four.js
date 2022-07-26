import React from "react";

class Four extends React.Component {
  state = {
    data: [
      { id: "1", name: "John", age: "20" },
      { id: "2", name: "Peter", age: "30" },
      { id: "3", name: "James", age: "40" },
      { id: "4", name: "Jenny", age: "50" },
      { id: "5", name: "Jenny", age: "60" },
    ],
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "honeydew",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "10vh",
        }}
      >
        <DisplayName />
        <ul>
          {this.state.data.map((item) => (
            <DisplayData data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Four;

class DisplayName extends React.Component {
  render() {
    return (
      <div>
        <h5> Contents displayed using React -table </h5>
        <h1>User Details</h1>
      </div>
    );
  }
}

class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
          </tr>
        </table>
      </div>
    );
  }
}
