import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FuncComponent from './Components/FunctionalComponent'
// import ClsComponent from './Components/ClassComponent'
// import JSXDiff from './Components/JSXDifference'
// import FuncProps from './Components/PropsUsingFunctionalComponent'
// import ClsProps from './Components/PropsUsingClassComponent'
import MyClock from './Components/StateHandlingInClass'

function App() {
  return (
    <div className="App">
      {/* <h1>Hello to the World of React</h1>
      <FuncComponent />
      <ClsComponent />
      <JSXDiff />
      <FuncProps firstname="Akshay" lastname="Tyagi" />
      <ClsProps firstname="Akshay" lastname="Tyagi" /> */}
      <MyClock />
    </div>
  );
}

export default App;
