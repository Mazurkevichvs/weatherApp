import React from 'react';
import './HourlyItem.scss';

const HourlyItem = ({ timestamp, icon, weather }) => {
  const time = new Date(timestamp * 1000).getHours();
  return (
    <div className="forecast__item hourly__item">
      <h3>{time}:00</h3>
      <div>
        <img src={`${icon}.svg`} alt="weather description" />
        <p>{weather.temp.toFixed(0)}°</p>
      </div>
      <div>
        <h4>Feels</h4>
        <h4>{weather.feels_like.toFixed(0)}°</h4>
      </div>
      <div>
        <h4>Humid</h4>
        <h4>{weather.humidity}</h4>
      </div>
    </div>
  );
};

export default HourlyItem;
