import React from "react";

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);
    console.log(this.props);

    return (
      <div className = "componentBox">
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{this.props.name}</h2>
        <h2>{stringProps}</h2>
        <div>Drinks: {this.props.drinks.join()}</div>
        <div>{this.props.number1} + {this.props.number2} = {this.props.number1 + this.props.number2}</div>
      </div>
    );
  }
}

export default PropsDisplayer;
