import React from 'react';
import logo from './logo.svg';
import './App.css';
import FuncComponent from './Components/FunctionalComponent'
import ClsComponent from './Components/ClassComponent'
import JSXDiff from './Components/JSXDifference'

function App() {
  return (
    <div className="App">
      <h1>Hello World<br />
        This is My first Web App.
      </h1>
      <FuncComponent />
      <ClsComponent />
      <JSXDiff />
    </div>
  );
}

export default App;
