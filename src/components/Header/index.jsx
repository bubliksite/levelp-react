import React from "react";
import "./style.scss";

function Header(props) {
  const { title } = props;
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
}

export default Header;
