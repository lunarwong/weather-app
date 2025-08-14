
import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/Current-weather';

import { apiURL, apiKey } from './api.js'
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)

  const handleOnSearchChange = async (searchData) => {
    try {
      if (!searchData) return;
      console.log(typeof searchData)
      const searchValue = searchData.toLowerCase()
      console.log(searchValue)

      const response = await fetch(`${apiURL}q=${searchValue}&appid=${apiKey}&units=metric`)
      const weatherData = await response.json()
      console.log(weatherData)

      if (weatherData.cod === 200) {
        setCurrentWeather(weatherData)
      } else {
        setCurrentWeather(null)
      }

    } catch (err) {
      console.error(err)
      setCurrentWeather(null)
    }
    
  }

  console.log(currentWeather)

  return (
    <>
      <h1>Hello world!</h1>
      <Search 
        onSearchChange={handleOnSearchChange}
      />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
    </>
  );
}

export default App;
