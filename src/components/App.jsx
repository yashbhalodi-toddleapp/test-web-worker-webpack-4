import React from "react";
import logo from "../assets/images/logo.svg";
import { performCPUIntensiveTask } from "./utils";
import Worker from "./app.worker.js";

const worker = new Worker();

const App = (props) => {
  const onNormalClick = () => {
    console.time("main");
    performCPUIntensiveTask();
    console.timeEnd("main");
  };
  const onWorkerClick = () => {
    console.log(worker);
    worker.postMessage("Hello World");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={onNormalClick}>Normal</button>
      <button onClick={onWorkerClick}>Worker</button>
    </div>
  );
};
export default App;
