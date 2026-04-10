
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import WeatherCard from './components/WeatherCard';
import {useWeather} from './hooks/useWeather';
import { useEffect, useState } from 'react';
import ThemeToogle from './components/ThemeToogle';


function App() {

  // const {data, loading, error, fetchWeather} = useWeather();
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");

    if(saved){
      return saved === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const fetchWeather = async (city) => {
    if (!city){
      setError("Enter a city");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `http://localhost:5000/weather?city=${encodeURIComponent(city)}`
      );      
      
      const result= await response.json();

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

  const theme = {
    background: isDark
      ? "linear-gradient(to bottom, #283981, #5c3880)"
      : "linear-gradient(to bottom, #667eea, #b0b311)",
    card: isDark
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(255, 255, 255, 0.15)",
    text: isDark ? "white" : "white",
  }


  return (
    
    <div style={{ padding: "20px", fontFamily:"Arial", minHeight:"100vh", maxHeight:"400px", margin:"0 auto", color:"white", background: theme.background}}>
      <ThemeToogle isDark={isDark} setIsDark={setIsDark} />
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
