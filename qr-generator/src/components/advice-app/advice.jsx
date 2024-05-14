import React, { useState } from 'react'
import "./advice.css";

export const Advice = () => {

    const [advice, setAdvice] = useState('Click me to generate advice')
    
    async function getAdvice(){
        console.log("clicked")
        const res = await fetch("https://api.adviceslip.com/advice")
        console.log(res)
        const data =await res.json()
        console.log(data)
        setAdvice(data.slip.advice)
    }

  return (
    <div className='advice-container'>
        <p>{advice}</p>

        <button onClick={getAdvice}>Click me</button>
    </div>
  )
}
