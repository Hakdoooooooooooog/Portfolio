import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

const ConditionalComponent = () => {
  let messageOne = <h1>Some Message 1</h1>;
  let messageTwo = <h1>Some Message 2</h1>;
  let message;
  const display = true;
  return display ? (message = messageOne) : (message = messageTwo);
};

export default ConditionalComponent;
