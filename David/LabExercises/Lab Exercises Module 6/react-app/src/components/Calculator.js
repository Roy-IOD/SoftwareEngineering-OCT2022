import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      Operator: '',
      result: 0
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    console.log(target)

    this.setState({
        [target.name]: target.value
    });
}    


  sum = () => {

  };

  render() {
    return (
    <div className="Calculator componentBox">

    <form onSubmit={this.calculation}>
    
    <div>
      
      First Number: <input type="number" value = {this.state.num1} name = "num1" onChange={this.handleInputChange}/>
      Second Number: <input type="number" value = {this.state.num2} name = "num2" onChange={this.handleInputChange}/>
     
     </div> 
      
      <div>
        <input type="radio" name="radiobutton" id="plus" value="+" />
        <label> Plus </label>
        <input type="radio" name="radiobutton" id="subtract" value="-" />
        <label> Subtract </label>
        <input type="radio" name="radiobutton" id="multiply" value="*" />
        <label> Multiply </label>
        <input type="radio" name="radiobutton" id="divide" value="/" />
        <label> Divide </label>

    </div>
    <button>Calculate</button>
    <div>
    Result: {this.state.result}
    </div>
    
    </form>
    </div>
    )
  }
}

//onchange for each input

//grab num1 and num2 from state

export default Calculator;

//user login example
//constructor
//state - numbers, operator and result
