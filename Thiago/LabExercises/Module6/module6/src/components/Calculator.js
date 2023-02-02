import React from 'react';
               
class Calculator extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  firstNumber: '',
                  lastNumber: '',
                  operatorSelector: 'addition',
                  result: ''
            }
      }
            mathCalculate = () => {
                  let result
                  switch(this.state.operatorSelector) {
                        case "addition":
                              result = Number(this.state.firstNumber) + Number(this.state.lastNumber);
                              break;
                        case "subtraction":
                              result = Number(this.state.firstNumber) - Number(this.state.lastNumber);
                              break;
                        case "multiply":
                              result = Number(this.state.firstNumber) * Number(this.state.lastNumber);
                              break;
                        case "divide":
                              result = Number(this.state.firstNumber) / Number(this.state.lastNumber);
                              break;
            }
            console.log(result)
            this.setState({
                  result: result
              }) ;
            };
            
            
            mathReset = () => {
                  this.setState({
                  firstNumber: '',
                  lastNumber: '',
                  result: '',
                  operatorSelector: 'addition'
                  })
            }

            handleInputChange = (event) => {
                  const target = event.target;
                  console.log(target)
                  this.setState({
                      [target.name]: target.value
                  });
              }    
   

      render() {
            return (
            <div>
                  <h1>Calculator</h1>
                  <p>{this.state.result}</p>
                        <input type="text" id="firstNumber" value={this.state.firstNumber} name="firstNumber" placeholder="Number 1" onChange={ this.handleInputChange }/>

                              <select id="operatorSelector" name="operatorSelector" onChange={ this.handleInputChange } >
                                    <option value="addition">+</option>
                                    <option value="subtraction">-</option>
                                    <option value="divide">&#247;</option>
                                    <option value="multiply">x</option>
                              </select>

                        <input type="text" id="firstNumber" value={this.state.lastNumber} name="lastNumber" placeholder="Number 2" onChange={ this.handleInputChange }/>

                        <button className="btn btn-primary" id="button" onClick={this.mathCalculate}>
                              Calculate
                        </button>   
                        <button className="btn btn-secondary" id="button" onClick={this.mathReset}>
                              Reset
                        </button>
            </div>
      )
}};


export default Calculator