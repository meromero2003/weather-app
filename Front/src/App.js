
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import WeatherCard from './components/WeatherCard';
import {useWeather} from './hooks/useWeather';


function App() {

  const {data, loading, error, fetchWeather} = useWeather();
  
  return (
    <div>
      <h1>Weather App</h1>

      {/* llama a componente de busqueda que tiene la logica de busqueda */}
      <SearchBar onSearch={fetchWeather} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <>
          {/* muestra la informacion obtenida */}

          <WeatherCard data= {data} />
          <Forecast hourly={data.hourly} />
        </>
      )}
    </div>
   
  );
}

export default App;
