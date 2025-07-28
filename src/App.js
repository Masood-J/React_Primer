import "./App.css";
import { useState } from "react";

function App() {
  const [num1, updateNum1] = useState(null);
  const [num2, updateNum2] = useState(null);
  const [result, updateresult] = useState(null);

  function add() {
    updateresult(Number(num1) + Number(num2));
  }
  function subtract() {
    updateresult(num1 - num2);
  }
  function multiply() {
    updateresult(num1 * num2);
  }
  function divide() {
    updateresult(num1 / num2);
  }
  function reset() {
    updateNum1("");
    updateNum2("");
  }
  function result_reset() {
    updateresult(null);
  }
  return (
    <div className="App">
      <h1>Simple Working Calculator</h1>
      <p>Result: {result}</p>
      <input
        type="number"
        value={num1}
        onChange={(e) => updateNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => updateNum2(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <button onClick={reset}>Reset Input</button>
      <button onClick={result_reset}>Reset Result</button>
    </div>
  );
}

export default App;
