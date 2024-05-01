import React, { useState } from 'react'
import './Input.css'
export const Input = ({onSubmit}) => {
    const [input, setInput] = useState("")
    const handleSubmit = () => {
        if(!input) return;
        onSubmit(input)
        setInput("")
    }
  return (
    <div className='container'>
        <input type='text' onChange={(e) => setInput(e.target.value )}  value={input} className='input'></input>
        <button onClick={handleSubmit} className='button'>Add</button>
    </div>
  )
}
