import React from "react";
import ReactDOM from "react-dom";

import { Pie } from "./Pie";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Pie />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
