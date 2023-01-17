import React, { useEffect, useState } from 'react';
import ForecastList from './ForecastList';
import './Main.scss';
import WeatherDescription from './WeatherDescription';

const Main = ({ time, city, currentWeather }) => {
  const [active, setActive] = useState(true);
  console.log(currentWeather);
  return (
    <main className="main">
      <section className="forecast__top">
        <section className="main__left">
          <h1>
            {currentWeather
              ? `${currentWeather.name}, ${currentWeather.sys.country}`
              : 'Gdansk, PL'}
          </h1>
          <h3>{time}</h3>
          <div className="main__weather">
            <img src="01.svg" alt="cloudy" />
            <div className="main__weather__deg">
              <p className="deg__title">{currentWeather.main.temp.toFixed(0)}°</p>
              <p className="deg__subtitle">{currentWeather.weather[0].main}</p>
            </div>
          </div>
        </section>
        <section className="main__right">
          <WeatherDescription
            number={currentWeather.main.temp_max.toFixed(0)}
            symbol={'°'}
            desc={'High'}
          />
          <WeatherDescription
            number={currentWeather.main.feels_like.toFixed(0)}
            symbol={'°'}
            desc={'Feels high'}
          />
          <WeatherDescription
            number={currentWeather.wind.speed}
            symbol={'km/h'}
            desc={'High'}
          />
          <WeatherDescription 
            number={currentWeather.main.temp_min.toFixed(0)}
            symbol={'°'}
            desc={'Low'}
          />
          <WeatherDescription 
            number={currentWeather.main.pressure}
            symbol={'hPa'}
            desc={'Pressure'}/>
          <WeatherDescription 
          number={currentWeather.main.humidity}
          symbol={'°'}
          desc={'High'}
          />
          
        </section>
      </section>
      <section className="forecast__bottom ">
        <div className="forecast__header">
          <div onClick={() => setActive(true)} className={active ? 'hourly active' : 'hourly'}>
            Hourly
          </div>
          <div onClick={() => setActive(false)} className={active ? 'daily' : 'daily active'}>
            Daily
          </div>
        </div>
        <ForecastList />
      </section>
    </main>
  );
};

export default Main;
