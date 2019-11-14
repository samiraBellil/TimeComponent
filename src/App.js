import React from 'react';
import './App.css';
import Timer from './Timer';


let x = 3650412;


function App() {
  return (
    <div className="App">
     <Timer y={x}/>
    </div>
  );
}

export default App;
