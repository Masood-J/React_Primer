import "./App.css";
import { useState } from "react";

function App() {
  const [num1, updateNum1] = useState(null);
  const [num2, updateNum2] = useState(null);
  const [result, updateresult] = useState(null);
  const [stringNum, updateString] = useState("");
  let status = false;
  function updateNum(e) {
    if (status == false) {
      updateNum1(e.target.value);
      status = true;
    } else if (status == true) {
      updateNum2(e.target.value);
      status = false;
    }
  }

  function update_string(e) {
    updateString(`${stringNum}${e.target.value}`);
  }
  function calculate() {
    const result = eval(stringNum);
    updateString(result);
  }
  function reset() {
    updateString("");
  }
  return (
    <div className="body bg-dark vh-100">
      <div
        className="container d-flex flex-column align-items-center bg-secondary rounded-1"
        style={{ height: "380px", width: "300px" }}
      >
        <h3 className="display-7 text-muted fw-bold mt-2">Simple Calculator</h3>
        <div>
          <input
            type="string"
            value={stringNum}
            className="rounded-2 bg-danger-subtle form-control mb-2 w-100"
            placeholder="0"
          />

          <div className="row">
            <button
              className="col btn btn-dark m-1"
              value={1}
              onClick={update_string}
            >
              1
            </button>
            <button
              className="col btn btn-dark m-1"
              value={2}
              onClick={update_string}
            >
              2
            </button>
            <button
              className="col btn btn-dark m-1"
              value={3}
              onClick={update_string}
            >
              3
            </button>
          </div>
          <div className="row">
            <button
              className="col btn btn-dark m-1"
              value={4}
              onClick={update_string}
            >
              4
            </button>
            <button
              className="col btn btn-dark m-1"
              value={5}
              onClick={update_string}
            >
              5
            </button>
            <button
              className="col btn btn-dark m-1"
              value={6}
              onClick={update_string}
            >
              6
            </button>
          </div>
          <div className="row">
            <button
              className="col btn btn-dark m-1"
              value={7}
              onClick={update_string}
            >
              7
            </button>
            <button
              className="col btn btn-dark m-1"
              value={8}
              onClick={update_string}
            >
              8
            </button>
            <button
              className="col btn btn-dark m-1"
              value={9}
              onClick={update_string}
            >
              9
            </button>
          </div>
          <div className="row">
            <button
              className="col btn btn-dark m-1"
              value={0}
              onClick={update_string}
            >
              0
            </button>
          </div>
          <div className="row">
            <button
              className="col btn btn-danger m-1"
              value={"+"}
              onClick={(e) => {
                update_string(e);
              }}
            >
              +
            </button>
            <button
              className="col btn btn-danger m-1"
              value={"-"}
              onClick={(e) => {
                update_string(e);
              }}
            >
              -
            </button>
            <button
              className="col btn btn-danger m-1"
              value={"*"}
              onClick={(e) => {
                update_string(e);
              }}
            >
              *
            </button>
            <button
              className="col btn btn-danger m-1"
              value={"/"}
              onClick={(e) => {
                update_string(e);
              }}
            >
              /
            </button>
          </div>
          <div className="row">
            <button className="col btn btn-success m-1" onClick={calculate}>
              Calculate
            </button>
            <button className="col btn btn-dark m-1" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
