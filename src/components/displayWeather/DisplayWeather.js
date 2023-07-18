const DisplayWeather = ({ currentWeather, unit }) => {
    const { main, weather, wind, name } = currentWeather;
  
    return (
      <div className="current-weather">
        <h2>Current Weather</h2>
        <p>{name && name}</p>
        <div className="weather-details">
          <div className="temperature">
            {Math.round(main?.temp)}°{unit === 'metric' ? 'C' : 'F'}
          </div>
          <div className="temperature d-flex">
            <div className='me-2'>⬆️
                {Math.ceil(main?.temp_max)}°{unit === 'metric' ? 'C' : 'F'}
            </div>
            <div>⬇️
                {Math.floor(main?.temp_min)}°{unit === 'metric' ? 'C' : 'F'}
            </div>
          </div>
          <div className="description">{weather[0]?.description}</div>
          <div className="humidity">Humidity: {main?.humidity}%</div>
          <div className="wind">
            Wind: {Math.round(wind.speed)} {unit === 'metric' ? 'm/s' : 'mph'}
          </div>
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/w/${weather[0]?.icon}.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
      </div>
    );
  };

  export default DisplayWeather;
  