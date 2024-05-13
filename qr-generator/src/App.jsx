import { useState } from 'react'
import { Inputfield } from './assets/components/inputfield'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Inputfield/>
    </>
  )
}

export default App
