
const currentWeather = ({data}) => {

    return(
        <>
            <div className="head">
                <p className="city">{data.name}</p>
                <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <img alt="weather" className="weather-icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
            <div>
                <p className="temp">{Math.round(data.main.temp)}°C</p>
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
        </>
    )
}

export default currentWeather