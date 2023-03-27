import React from 'react';
import './WeatherDescription.scss';

const WeatherDescription = ({ number, symbol, desc }) => {
  return (
    <div className="weather__desc">
      <p className="desc__title">
        {number}
        <span className={symbol.length > 1 ? 'prefix' : ''}>{symbol}</span>
      </p>
      <p className="desc__subtitle">{desc}</p>
    </div>
  );
};

export default WeatherDescription;
