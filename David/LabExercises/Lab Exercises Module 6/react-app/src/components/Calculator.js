import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      operator: "+",
      result: 0,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    console.log(target);

    this.setState({
      [target.name]: target.value,
    });
  };

  calculate = (e) => {
    e.preventDefault();
    let result = "";
    switch (this.state.operator) {
      case "+":
        result = Number(this.state.num1) + Number(this.state.num2);
        break;
      case "-":
        result = Number(this.state.num1) - Number(this.state.num2);
        break;
      case "*":
        result = Number(this.state.num1) * Number(this.state.num2);
        break;
      case "/":
        result = Number(this.state.num1) / Number(this.state.num2);
        break;
        default:
    }
    this.setState({ result: result });
  };

  render() {
    return (
      <div className="Calculator componentBox">
        <h1>Calculator</h1>
        <form onSubmit={this.calculate}>
          <div>
            <p>First Number:</p>
            <input
              type="number"
              value={this.state.num1}
              name="num1"
              id="num1"
              onChange={this.handleInputChange}
              
            />
            <p>Second Number:</p>
            <input
              type="number"
              value={this.state.num2}
              name="num2"
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <input
              type="radio"
              name="operator"
              id="plus"
              value="+"
              onChange={this.handleInputChange}
              defaultChecked
            
            />
            <label> Plus </label>
            <input
              type="radio"
              name="operator"
              id="subtract"
              value="-"
              onChange={this.handleInputChange}
            />
            <label> Subtract </label>
            <input
              type="radio"
              name="operator"
              id="multiply"
              value="*"
              onChange={this.handleInputChange}
            />
            <label> Multiply </label>
            <input
              type="radio"
              name="operator"
              id="divide"
              value="/"
              onChange={this.handleInputChange}
            />
            <label> Divide </label>
          </div>
          <button>Calculate</button>
          <div>Result: {this.state.result}</div>
        </form>
      </div>
    );
  }
}

//onchange for each input

//grab num1 and num2 from state

export default Calculator;
