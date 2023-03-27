import React from 'react';
import './DailyItem.scss';
const DailyItem = ({ timestamp, icon, weather, desc }) => {
  const day = new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' });
  return (
    <div className="forecast__item daily__item">
      <h3>{day}</h3>
      <img src={`${icon}.svg`} alt="weather description" />
      <p>{desc}</p>
      <div>
        <h4>{weather.temp.toFixed(0)}°/</h4>
        <h4 className="cold">{weather.feels_like.toFixed(0)}°</h4>
      </div>
    </div>
  );
};

export default DailyItem;
