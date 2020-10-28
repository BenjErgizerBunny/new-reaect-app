import React from "react";
import "./LargeButton.css";

function LargeButton(props) {
  const { buttonTitle, callbackFunction } = props;
  console.log("I am largebutton and I rerendered");
  return (
    <button onClick={() => callbackFunction()} className="LargeButton">
      {buttonTitle}
    </button>
  );
}

export default LargeButton;
