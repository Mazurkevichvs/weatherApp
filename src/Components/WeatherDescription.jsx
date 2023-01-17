import React from 'react'
import './WeatherDescription.scss'

const WeatherDescription = ({number, symbol, desc}) => {
  return (
    <div className='weather__desc'>
        <p className='desc__title'>{number}{symbol}</p>
        <p className='desc__subtitle'>{desc}</p>
    </div>
  )
}

export default WeatherDescription