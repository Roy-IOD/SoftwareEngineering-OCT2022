import React from 'react';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        
        //default state values
        this.state = {num1: 0, num2: 0, operator: '+', result: 0}
    }

    handleInputChange = (event) => {
        const target = event.target;
        console.log(target)
    
        this.setState({
            [target.name]: target.value
        });
    }  

    calculate = () => {
        let calculation 
        switch(this.state.operator) {
            case '+':
                calculation = parseInt(this.state.num1) + parseInt(this.state.num2);
                break;
            case '-':
                calculation = parseInt(this.state.num1) - parseInt(this.state.num2);
                break;
            case '*':
                calculation = parseInt(this.state.num1) * parseInt(this.state.num2);
                break;
            case '/':
                calculation = parseInt(this.state.num1) / parseInt(this.state.num2);
                break;
        }
        
        this.setState({
            result : calculation
        });
    
        //variable where i store result of calc 
        // Needs to grab the 2 numbers from the state 
        // and grab operator from the state
        // then some kind of testing on operator to determine which one, then do calculation - switch statement
        // once calculation done, store in state
        // either bind it or turn this into an arrow function which doesn't have its own this
        // See chatGPT example for bind stuff 
    }  

    render() {
        return (
            <div className='numbers'>
                <input name='num1' value={this.state.num1} onChange={ this.handleInputChange }></input>
                <select name='operator' onChange={ this.handleInputChange }>Select
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                    </select>
                    <input name='num2' value={this.state.num2} onChange={ this.handleInputChange }></input>
                <button name='calculate' onClick={ this.calculate }>calculate</button>
                <div>{this.state.result}</div>
            </div>
        )
    }
}



export default Calculator;
