import React from "react";

class Greeting extends React.Component {
  render() {

    return (
      <div>
        <h1>Hello World</h1>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default Greeting;