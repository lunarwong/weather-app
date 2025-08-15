import '../css/current-weather.css'

const currentWeather = ({data}) => {

    return(
        <div className="current-weather">
            <div className="head">
                <p className="city">{data.name}</p>
                
            </div>
            <div className="middle">
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <div>
                    <img alt="weather" className="weather-icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
            </div>
            <div>
                
                <div className="details">
                    <span className="parameter-name">Feels Like </span>
                    <span className="parameter-value">{data.main.feels_like}°C</span>
                </div>
                <div className="details">
                    <span className="parameter-name">Wind </span>
                    <span className="parameter-value">{data.wind.speed} m/s</span>
                </div>
                <div className="details">
                    <span className="parameter-name">Humidity </span>
                    <span className="parameter-value">{data.main.humidity}%</span>
                </div>
                <div className="details">
                    <span className="parameter-name">Pressure </span>
                    <span className="parameter-value">{data.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    )
}

export default currentWeather