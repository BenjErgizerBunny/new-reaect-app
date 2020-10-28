import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LargeButton from "./components/LargeButton/LargeButton";

function App() {
  const [randomButtonTitle, setRandomButtonTitle] = useState(5.21);
  const [buttonCounterTitle, setButtonCounterTitle] = useState(0);
  const [newState, setNewState] = useState();

  function increaseButtonCounter() {
    setButtonCounterTitle(buttonCounterTitle + 1);
  }

  function changeButtonTitle() {
    const randomNumber = Math.random() * 10;
    const roundedNumber = randomNumber.toFixed(2);
    setRandomButtonTitle(roundedNumber);
  }
  console.log("Hi I am app and I rerendered");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LargeButton
          buttonTitle={randomButtonTitle}
          callbackFunction={changeButtonTitle}
        />
        <LargeButton
          buttonTitle={buttonCounterTitle}
          callbackFunction={increaseButtonCounter}
        />
        <button></button>
      </header>
    </div>
  );
}

export default App;
