import React, { useState } from "react";
import "./style.css";

function Button() {
  const [count, setCount] = useState(0);
  const clickCountPlus = () => {
    setCount(count + 1);
  };
  const clickCountMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="d-flex">
      <button className="btn" onClick={clickCountPlus}>
        +
      </button>
      <h1>{count}</h1>
      <button className="btn" onClick={clickCountMinus}>
        -
      </button>
    </div>
  );
}

export default Button;
