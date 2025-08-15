
import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/Current-weather';
import Forecast from './components/Forecast.jsx';

import { apiURL, apiKey } from './api.js'
import { useState, useEffect } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = async (searchData) => {
    try {
      if (!searchData) return;
      const searchValue = searchData.trim().toLowerCase()
      console.log(searchValue)

      const response = await fetch(`${apiURL}q=${searchValue}&appid=${apiKey}&units=metric`)
      const weatherData = await response.json()
      console.log(weatherData)

      if (weatherData.cod === 200) {
        setCurrentWeather(weatherData)
      } else {
        setCurrentWeather(null)
      }

      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${apiKey}&units=metric`)
      const forecastData = await forecastResponse.json()
      console.log(forecastData)

      if (weatherData.cod === 200) {
        setForecast(forecastData)
      } else {
        setForecast(null)
      }

    } catch (err) {
      console.error(err)
      setCurrentWeather(null)
      setForecast(null)
    }
    
  }

  console.log(currentWeather)
  useEffect(() => {
    handleOnSearchChange("London");
  }, []);

  return (
    <div className="app">
      <h1>Hello world!</h1>
      <Search 
        onSearchChange={handleOnSearchChange}
      />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast  data={forecast}/>}
    </div>
  );
}

export default App;
