import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Article from "./components/Article";

function App() {
  const [isShow, setToggle] = useState(true);
  function toggleText() {
    setToggle(!isShow);
    console.log(isShow);
  }
  return (
    <div className="App">
      <Header title="React App" />
      <Button isShow={isShow} onClick={toggleText} />
      <Article isShow={isShow} />
    </div>
  );
}

export default App;
