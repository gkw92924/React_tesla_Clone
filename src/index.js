import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import SignInFrom from "./From";

function tick()
{
  const ele = (
    <h4>{new Date().toLocaleTimeString()}</h4>
  );

  ReactDOM.render(ele,document.getElementById("time"));
}

setInterval(tick(),1000);

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<SignInFrom />, document.getElementById("root1"));
