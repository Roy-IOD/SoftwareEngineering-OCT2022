import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = { greeting: "World" };
  }

  changeGreeting = () => {
    let newGreeting =
      this.state.greeting === "World" ? "David" : "World";
    this.setState({ greeting: newGreeting });
  };
  render() {
    return (
      <div className="Greeting componentBox">
        <h1>Greeting with name prop:</h1> <h2>Hello {this.props.name ? this.props.name : "World"}</h2>
        <h1>Greeting change on button click:</h1> <h2>Hello {this.state.greeting}</h2>
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
