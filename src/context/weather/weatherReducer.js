
const WeatherReducer = (state, action) => {
    switch(action.type){
        case "ADD_WEATHER_DATA":
            return {
                ...state,
                weatherData: action.payload,
                loading: false
            }
        case "ADD_FORECAST_DATA":
            return {
                ...state,
                forecastData: action.payload,
                loading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        
        default:
            return state
    }
}

export default WeatherReducer;