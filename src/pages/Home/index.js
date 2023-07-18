
import React, { useState, useEffect, useContext } from 'react';
import weatherContext from '../../context/weather/weatherContext';
import SearchBar from '../../components/search/SearchBar';
import DisplayWeather from '../../components/displayWeather/DisplayWeather';
import DisplayForecast from '../../components/displayForecast/DisplayForecast';
import Toggle from '../../components/toggle/Toggle';

const Home = () => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const { weatherData, forecastData, getWeather, getForecast } = useContext(weatherContext);

    useEffect(() => {
        if (city !== '') {
            getWeather(city, unit);
            getForecast(city, unit);
        }
        //eslint-disable-next-line
    }, [city, unit])
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleUnitToggle = () => {
        setUnit(unit === 'metric' ? 'imperial' : 'metric');
    };
  return (
    <div className='app'>
        <div className='d-flex mb-4 search_container'>
            <div className='me-4'><SearchBar city={city} onCityChange={handleCityChange} /></div>
            <div><Toggle unit={unit} onToggle={handleUnitToggle} /></div>
        </div>
        {weatherData && weatherData?.weather && weatherData?.weather?.length > 0 && <DisplayWeather  currentWeather={weatherData} unit={unit} />}
        {forecastData && forecastData.list &&  forecastData.list.length > 0 && <DisplayForecast forecast={forecastData.list} unit={unit} />}
    </div>
  )
}

export default Home