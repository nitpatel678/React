import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './component/component.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myobje = {
    name: "Nitin",       // Creating a object to pass the down the value in the component
    age: 21
  }

  // someobject = {myobje} 

  let newArray = [1, 2, 3, 4, 5];      // Creating a array to pass int the component
  // <Component username = 'react playlist' newobject = {newArray}/>
  return (
    <>
      <h1 className='bg-red-500 text-black p-5 rounded-2xl mb-4'>Tailwind Test Class</h1>
      <Component username = 'chai aur code w nitin'/>
      <Component username = 'react playlist' />
      
    </>
  )
}

export default App
