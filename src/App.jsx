import React, {useState, useEffect} from 'react'
import './App.scss'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [currentWeather, setCurrentWeather] = useState('')
  const [dailyWeather, setDailyWeather] = useState('')
  const [city, setCity] = useState('')
  const [time, setTime] = useState('')  

  const getCityName = (cityName) => {
    setCity(cityName)
  }

  useEffect(() => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    }
    const todayTime = new Date().toLocaleDateString("en-US", options)
    setTime(todayTime)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city ? city : 'Gdansk'}&appid=c84c59d4d104a2550f66e46573ece2ed&units=metric&lang=en`)
    .then(res => res.json())
    .then(data => {
      setCurrentWeather(data)
      console.log(currentWeather)
    })
  },[])

  return (
    <div className="App">
      <div className={currentWeather ? "container" : 'container  loading'}>
      <Header getCityName={getCityName}/>
      {currentWeather && <Main time={time} city={city} currentWeather={currentWeather}/>}
      </div>
    </div>
  )
}

export default App
