
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import WeatherCard from './components/WeatherCard';
import {useWeather} from './hooks/useWeather';
import { useEffect, useState } from 'react';
import ThemeToogle from './components/ThemeToogle';
import LocationButton from './components/LocationButton';


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

  const fetchWeather = async (query) => {
    if (!query || !query.trim()){
      setError("Enter a city");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `http://localhost:5000/weather?city=${encodeURIComponent(query)}`
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

  // const fetchByLocation = () => {
  //   if(!navigator.geolocation){
  //     setError("Geolocation not suported");
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     async(position) =>{
  //       try{
  //         setLoading(true);
  //         setError(null);

  //         const lat= position.coords.latitude;
  //         const lon= position.coords.longitude;

  //         // const response= await fetch(
  //         //   `http://localhost:5000/weather?lat=${lat}&lon=${lon}`
  //         // );

  //         // const result= await response.json();

  //         fetchWeather(`lat=${lat}&lon=${lon}`);

  //         if(result.error){
  //           setError(result.error);
  //           setData(null);
  //           return;
  //         }
  //         setData(result);
  //       } catch (error){
  //         setError("Error getting location weather");
  //       }finally{
  //         setLoading(false);
  //       }
  //     },
  //     ()=>{
  //       setError("Location persmission denied");
  //     }
  //   );
  // };

  const fetchByLocation = () => {
      if (!navigator.geolocation) {
        setError("Geolocation not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetchWeather(`${lat},${lon}`);
      },
      () => {
        setError("Location permission denied");
      }
    );
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
      <div style={{display:"flex"}}>
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        <LocationButton onClick={fetchByLocation} />
      </div>

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
