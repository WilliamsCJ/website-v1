import React from 'react';
import './App.css';
// import './components/overrides.css'
import {Fullpage} from "./components/FullPage";
import {Top} from "./components/Top"
import {Bottom} from "./components/Bottom"

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <Fullpage />
            <Top />
            <Bottom />
        </header>
    </div>
    );
}

export default App;
