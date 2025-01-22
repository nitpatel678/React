import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Nitin Patel</h2>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
