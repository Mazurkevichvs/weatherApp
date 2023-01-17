import React from 'react'
import DailyItem from './DailyItem'
import HourlyItem from './HourlyItem'
import './ForecastList.scss'
const ForecastList = () => {
  return (
    <div className="forecast__wrapper">
      <DailyItem/>
      <DailyItem/>
      <DailyItem/>
      <DailyItem/>
      <DailyItem/>
      <DailyItem/>
      <DailyItem/>
    </div>
  )
}

export default ForecastList