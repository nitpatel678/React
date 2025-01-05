import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let value = 15
  let [counter, setcounter] = useState({value});

  //let counter = 5;
  const addvalue = () => {
    console.log("clicked",counter);
    counter++;
    setcounter(counter);
    
  }

  const removevalue = () => {
    console.log("clicked",counter);
    counter--;
    setcounter(counter);
  }

  return (
    <div>
      <h1>Chai aur Code With Nitin</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addvalue}>Add : {counter}</button>
      <br />
      <button onClick={removevalue}>Remove : {counter}</button>
      <br />
      <p1>Footer : {counter}</p1>
    </div>
  )
}

export default App
