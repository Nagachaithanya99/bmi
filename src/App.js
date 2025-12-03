import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const[height , setHeight]= useState("")
  const[weight , setWeight]= useState("")
  const[bmi , setBmi]= useState("")

  const calculatebmi=()=>{
    if (height && weight){
      const h= height/ 100;
      const result=(weight/(h*h).toFixed(2))
      setBmi(result)
    }
    else{
      setBmi("please enter valid number")
    }
  }
  return (
    <div className="App">
      <div>
        <h1>calculatebmi</h1>
        <input
        type='number'
        placeholder='height(cm)'
        value={height}
        onChange={(e)=>setHeight(e.target.value)}/>
         <input
        type='number'
        placeholder='weight(cm)'
        value={weight}
        onChange={(e)=>setWeight(e.target.value)}/>
        <button onClick={calculatebmi}>add</button>
       <h2>bmi ${bmi}</h2>
      </div>
     
    </div>
  );
}

export default App;
