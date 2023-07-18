const DisplayForecast = ({ forecast, unit }) => {
    const renderForecastItem = (item) => {
        const { dt, main, weather } = item;
        const date = new Date(dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temperature = Math.round(main.temp);

        return (
            <div key={dt} className="forecast-item">
                <div className="date">{day}</div>
                <div className="temperature">{temperature}°{unit === 'metric' ? 'C' : 'F'}</div>
                <div className="description">{weather[0].description}</div>
                <div className="icon">
                    <img
                        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                        alt="Weather Icon"
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="forecast">
            <h2>5-Day Forecast</h2>
            <div className="forecast-items">
                {forecast.map(renderForecastItem)}
            </div>
        </div>
    );
};

export default DisplayForecast;