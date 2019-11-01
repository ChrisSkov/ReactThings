import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./file1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <p>{upper("please uppercase me")}</p>
        <p>{upper(text1)}</p>
        <p>{upper(text2)}</p>
        <p>{upper(text3)}</p>
      </header>
    </div>
  );
}

export default App;
