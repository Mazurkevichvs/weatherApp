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
      
    })
    .catch(err => console.error(err))

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city ? city : 'Gdansk'}&appid=c84c59d4d104a2550f66e46573ece2ed&units=metric&lang=en`)
    .then(res => res.json())
    .then(data => {
      setDailyWeather(data)
      console.log(data) 
    })
    .catch(err => console.error(err))

  },[city])

  return (
    <div className="App">
      <div className={currentWeather ? "container" : 'container  loading'}>
      <Header getCityName={getCityName}/>
      {currentWeather && <Main time={time} currentWeather={currentWeather} dailyWeather={dailyWeather}/>}
      </div>
    </div>
  )
}

export default App
