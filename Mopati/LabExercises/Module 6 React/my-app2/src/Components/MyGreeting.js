import React from "react";

class MyGreeting extends React.Component {
  render() {
    return <h1>Hello World, {this.props.name}</h1>;
  }
}

export default MyGreeting;
