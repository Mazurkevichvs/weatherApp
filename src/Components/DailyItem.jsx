import React from 'react'
import './DailyItem.scss'
const DailyItem = () => {
  return (
    <div className="forecast__item daily__item">
      <h3>Wednesday</h3>
        <img src="/cloud.png" alt="weather description" />
      <div>
        <h4>14°/</h4>
        <h4 className='cold'>14°</h4>
      </div>
    </div>
  )
}

export default DailyItem