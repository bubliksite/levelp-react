import React, { useState } from "react";
import "./style.css";

function Input() {
  const [state, setState] = useState("");
  console.log(state);
  const onChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <input
        value={state}
        onChange={(event) => {
          onChange(event);
        }}
      />
    </div>
  );
}

export default Input;
