import React, { useState } from 'react'
import './Header.scss'

const Header = ({getCityName, incorrectInput}) => {
  const [input, setInput] = useState('')
  const handleFetch = (e) => {
    e.preventDefault()
    getCityName(input)
  }

  return (
    <header>
        <img src="/icon1.png" alt="weather app" />
        <p>Weather App</p>
        <form onSubmit={handleFetch}>
          <input className={incorrectInput ? 'incorrect-input' : ''} onChange={(e) => {setInput(e.target.value)}} type="text" placeholder='Enter a city'/>
          <button type='submit'>Search</button>
        </form>
        
    </header>
  )
}

export default Header