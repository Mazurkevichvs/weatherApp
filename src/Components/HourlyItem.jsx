import React from 'react';
import './HourlyItem.scss';

const HourlyItem = () => {
  return (
    <div className="forecast__item hourly__item">
      <h3>1PM</h3>
      <div>
        <img src="/cloud.png" alt="weather description" />
        <p>14&#176;</p>
      </div>
      <div>
        <h4>Feels</h4>
        <h4>14&#176;</h4>
      </div>
      <div>
        <h4>Precip</h4>
        <h4>0.1</h4>
      </div>
    </div>
  );
};

export default HourlyItem;
