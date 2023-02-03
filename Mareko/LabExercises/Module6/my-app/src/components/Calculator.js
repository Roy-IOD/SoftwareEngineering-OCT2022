import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: "",
            number2: "",
            result: 0,
            operator: "+"
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleOperator = event => {
        this.setState({ operator: event.target.value });
    };

    calculate = () => {
        const number1 = parseInt(this.state.number1);
        const number2 = parseInt(this.state.number2);

        const operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };

        const operation = operations[this.state.operator];
        const result = operation ? operation(number1, number2) : 0;
        this.setState({ result: result });
    };

    render() {
        return (
          <div>
            <input type="number" value={this.state.number1} onChange={this.handleChange} name="number1" />

            <select value={this.state.operator} onChange={this.handleOperator}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>

            <input type="number" value={this.state.number2} onChange={this.handleChange} name="number2" />

            <button onClick={this.calculate}>Calculate</button>

            <p>Result: {this.state.result}</p>
          </div>
        );
    }
}

export default Calculator; 