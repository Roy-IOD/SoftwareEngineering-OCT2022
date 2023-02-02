import React from "react";

class MyHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "World",
    };
  }

  render() {
    return (
      <div>
        <div>Hello {this.state.name}</div>
        <button onClick={() => this.setState({ name: "Mopati" })}>
          please greet me
        </button>
      </div>
    );
  }
}

export default MyHello;
