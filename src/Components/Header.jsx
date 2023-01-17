import React, { useState } from 'react'
import './Header.scss'

const Header = ({getCityName}) => {
  const [input, setInput] = useState('')

  return (
    <header>
        <img src="/icon1.png" alt="weather app" />
        <p>Weather App</p>
        <input onChange={(e) => {setInput(e.target.value)}} type="text" placeholder='Enter a city'/>
        <button onClick={() => getCityName(input)}>Search</button>
    </header>
  )
}

export default Header