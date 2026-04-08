
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import WeatherCard from './components/WeatherCard';
import {useWeather} from './hooks/useWeather';
import { useState } from 'react';


function App() {

  // const {data, loading, error, fetchWeather} = useWeather();
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    if (!city){
      setError("Enter a city");
      return;
    }

    try {
      setLoading(true);
      setError(null);

    console.log("Ciudad enviada:", city);

      const response = await fetch(
        `http://localhost:5000/weather?city=${encodeURIComponent(city)}`
      );      
      
      console.log("Response:", response);

      const result= await response.json();

      console.log("Resultado:", result);
      setLoading(false);


      if(result.error){
        setError(result.error);
        setData(null);
        return;
      }

      setData(result);

    } catch (error){
          console.error(error);

      setError("Something went wrong");
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily:"Arial", background:"linear-gradient(to bottom, #2b47c4, #b0b311)", minHeight:"100vh", maxHeight:"400px", margin:"0 auto", color:"white"}}>
      <h1 style={{ fontSize:"60px", fontWeight:"bold", margin:"10px 0" }}>
        Weather App 🌤️</h1>

      {/* llama a componente de busqueda que tiene la logica de busqueda */}
      <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />

      {loading && <p>Loading...⏳</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

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
