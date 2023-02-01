import React, { useState } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("");

  const handleFirstNumberChange = event => {
    setFirstNumber(event.target.value);
  };

  const handleSecondNumberChange = event => {
    setSecondNumber(event.target.value);
  };

  const handleOperationChange = event => {
    setOperation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    switch (operation) {
      case "add":
        setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
        break;
      case "subtract":
        setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
        break;
      case "multiply":
        setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
        break;
      case "divide":
        setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
        break;
      default:
        setResult(null);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstNumber}
        onChange={handleFirstNumberChange}
        placeholder="First Number"
      />
      <select value={operation} onChange={handleOperationChange}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input
        type="text"
        value={secondNumber}
        onChange={handleSecondNumberChange}
        placeholder="Second Number"
      />
      <button type="submit">Calculate</button>
      {result && <p>Result: {result}</p>}
    </form>
  );
};

export default Calculator;
