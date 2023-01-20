import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = { greeting: "Hello World" };
  }

  changeGreeting = () => {
    let newGreeting =
      this.state.greeting === "Hello World" ? "Hello David" : "Hello World";
    this.setState({ greeting: newGreeting });
  };
  render() {
    return (
      <div className="Greeting">
        <h1> {this.state.greeting}</h1>
        <button onClick={this.changeGreeting}>Change Greeting</button>
      </div>
    );
  }
}

// render() {

//   return (
//     <div className = "Greeting">
//       <h1>Hello {this.props.name ? this.props.name : "World"}</h1>
//     </div>
//   );
// }

export default Greeting;
