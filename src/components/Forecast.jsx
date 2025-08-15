import '../css/forecast.css'

const Forecast = ({data}) => {
    const dailyForecast = data.list.filter(item => item.dt_txt.includes('12:00:00'))
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return(
    <div className="forecast">
        <h4>Weather forecast</h4>
        <label className="title">Daily</label>
        <table>
            <tbody>
                {dailyForecast.map((data, index) => {
                    const formattedDate = new Date(data.dt_txt);
                    const dayName = days[formattedDate.getDay()];
                    return (
                       <tr>
                        <td>{dayName}</td>
                        <td>{data.main.temp}°C</td>
                        <div className="weather-info">
                            <td><img alt="weather" className="weather-icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} /></td>
                            <td>{data.weather[0].description}</td>
                        </div>
                    </tr> 
                    )
                })}
            </tbody>
            
        </table>
    </div>
    )
}

export default Forecast