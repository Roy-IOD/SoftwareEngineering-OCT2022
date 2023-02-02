import React, { useState } from "react";

// Pseudo Code
// Input two numbers(num1, num2)
// User to choose the numbers' operator e.g division, multiplication etc
// Print out the result

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    switch (operator) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
