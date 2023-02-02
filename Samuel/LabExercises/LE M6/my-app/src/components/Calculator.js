import React from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            num1: '',
            num2: '',
            operator: '+',
            result: '',
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name)
        console.log(value)
        
    
        this.setState({
            [name]: value,
            
        });
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state)
    //     alert(`The sum is ${this.result}`)
    // }  
    
    mathCalculate = (e) => {
        e.preventDefault();

        let number1 = this.state.num1;
        let number2 = this.state.num2;
        let result;

        // let sum = Number(number1) + Number(number2)

        switch(this.state.operator){
            case "add":
              result = Number(number1) + Number(number2);
              break;
            case "subtract":
              result = Number(number1) - Number(number2);
              break;
            case "multiply":
              result = Number(number1) * Number(number2);
              break;
            case "divide":
              result = Number(number1) / Number(number2);
              break;
          }

        // let sum = this.state.operator === 'add' ? Number(number1) + Number(number2):'not add';
        console.log(result)
        
        this.setState({
        result: result,
        })

        console.log(this.state)
       




    }

    
    render() {
        return (
            <form className="Calculator componentBox">
                <h2> Calculator </h2>
                <label>
                    First Number:
                    <input name="num1" type="number" value={this.state.num1} onChange={this.handleInputChange} />
                </label><br /> <br />

                <select name="operator" type="select" onChange={this.handleInputChange}>
                    <option selected>Open this select menu</option>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">x</option>
                    <option value="divide">÷</option>
                </select><br />
                <br />

                <label>
                    Second Number:
                    <input name="num2" type="number" value={this.state.num2} onChange={this.handleInputChange} />
                </label><br />

                <button id = "button" onClick = {this.mathCalculate} type="equals" >EQUALS</button>
                {/* <button id = "button" onClick = {this.mathReset} type="reset">RESET</button> */}
                <div> Result: {this.state.result}</div>
            </form>
        )

   
    }
}

export default Calculator;