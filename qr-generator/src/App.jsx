import { useState } from 'react'
import { Inputfield } from './components/inputfield'
import './App.css'
import { Advice } from './components/advice-app/advice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Inputfield/> */}

    <Advice/>
    </>
  )
}

export default App
