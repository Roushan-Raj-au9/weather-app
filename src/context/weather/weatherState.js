import { useReducer } from 'react';
import WeatherReducer from './weatherReducer';
import WeatherContext from './weatherContext';
import axios from 'axios';

const WeatherState = ({ children }) => {
    const initialState = {
        weatherData: [],
        forecastData: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(WeatherReducer, initialState);
    const getWeather = async(city, unit) => {
        try {
            setLoading()
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
            dispatch({
                type: 'ADD_WEATHER_DATA',
                payload: data
            })
        } 
        catch (err) {
            console.error('Error fetching weather data: ' , err);
        }
    }
    const getForecast = async(city, unit='metric') => {
        try {
            setLoading()
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
            dispatch({
                type: 'ADD_FORECAST_DATA',
                payload: data
            })
        } 
        catch (err) {
            console.error('Error fetching forecast data: ', err)
        }
    }
    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }
    return(
        <WeatherContext.Provider value={{
            weatherData: state.weatherData,
            forecastData: state.forecastData,
            loading: state.loading,
            getWeather,
            getForecast,
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherState;