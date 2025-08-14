

const Forecast = ({data}) => {
    const dailyForecast = data.list.filter(item => item.dt_txt.includes('12:00:00'))
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
    
    dailyForecast.forEach( forecast => {
        

    })
    
    return(
    <>
        <h3>Weather forecast</h3>
        <label className="title">Daily</label>
        <table>
            <tbody>
                {dailyForecast.map((forecast, index) => {
                    const formattedDate = new Date(forecast.dt_txt);
                    const dayName = days[formattedDate.getDay()];
                    return (
                       <tr>
                        <td>{dayName}</td>
                        <td>{forecast.main.temp}°C</td>
                        <td>{forecast.weather[0].description}</td>
                    </tr> 
                    )
                })}
            </tbody>
            
        </table>
    </>
    )
}

export default Forecast