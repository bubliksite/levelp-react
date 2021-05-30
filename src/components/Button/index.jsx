import React from "react";
import "./style.css";

function Button(props) {
  const { isShow, onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      {isShow ? "Hide" : "Show"}
    </button>
  );
}

export default Button;
