import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header';
import Main from './Components/Main';
import Error from './Components/Error';
import { SpinnerCircular } from 'spinners-react';

function App() {
  const [currentWeather, setCurrentWeather] = useState('');
  const [dailyWeather, setDailyWeather] = useState('');
  const [city, setCity] = useState('');
  const [time, setTime] = useState('');
  const [incorrectInput, setIncorrectInput] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getCityName = (cityName) => {
    if (cityName && typeof cityName === 'string' && cityName.trim() !== '') {
      setCity(cityName);
      setIncorrectInput(false);
    } else {
      setIncorrectInput(true);
    }
  };

  useEffect(() => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    };
    const todayTime = new Date().toLocaleDateString('en-US', options);
    setTime(todayTime);
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        city ? city : 'Gdansk'
      }&appid=c84c59d4d104a2550f66e46573ece2ed&units=metric&lang=en`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '404') {
          setIsLoading(false);
          setError(data.message);
        } else {
          setCurrentWeather(data);
          setIsLoading(false);
          setError(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        city ? city : 'Gdansk'
      }&appid=c84c59d4d104a2550f66e46573ece2ed&units=metric&lang=en`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '404') {
          setIsLoading(false);
          setError(data.message);
        } else {
          setDailyWeather(data);
          setIsLoading(false);
          setError(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <Header getCityName={getCityName} incorrectInput={incorrectInput} />
        {isLoading && (
          <SpinnerCircular
            size={90}
            thickness={100}
            speed={100}
            color="rgba(255, 255, 255, 1)"
            secondaryColor="rgba(0, 0, 0, 0.39)"
          />
        )}
        {dailyWeather && !error && (
          <Main time={time} currentWeather={currentWeather} dailyWeather={dailyWeather} />
        )}
        {error && <Error error={error} />}
      </div>
    </div>
  );
}

export default App;
