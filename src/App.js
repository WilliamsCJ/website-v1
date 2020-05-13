import React from 'react';
import './App.css';
import {Fullpage} from "./components/FullPage";
import {Top} from "./components/Top"
import {Bottom} from "./components/Bottom"
import {Section1} from "./components/Section1"

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Top />
            <Fullpage />
            <Bottom />
        </header>
    </div>
  );
}

export default App;
