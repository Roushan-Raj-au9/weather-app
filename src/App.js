import './App.css';
import WeatherState from './context/weather/weatherState';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <WeatherState>
        <Home />
      </WeatherState>
    </div>
  );
}

export default App;
