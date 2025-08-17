
import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/Current-weather';
import Forecast from './components/Forecast.jsx';

import dawn from './assets/dawn.jpg';
import noon from './assets/noon.jpg';
import evening from './assets/evening.jpg';
import night from './assets/night.jpg';

import { apiURL, apiKey } from './api.js'
import { useState, useEffect } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  useEffect(() => {
    const hour = new Date().getHours();
    let bgImage;

    if (hour >= 5 && hour < 12) {
      bgImage = dawn;
    } else if (hour >= 12 && hour < 17) {
      bgImage = noon;
    } else if (hour >= 17 && hour < 20) {
      bgImage = evening;
    } else {
      bgImage = night;
    }

    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  }, []);

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
      <h1>Hello world !</h1>
      <Search 
        onSearchChange={handleOnSearchChange}
      />
      <div className="container">
        {currentWeather && <CurrentWeather data={currentWeather}/>}
        {forecast && <Forecast  data={forecast}/>}
      </div>
      
    </div>
  );
}

export default App;
