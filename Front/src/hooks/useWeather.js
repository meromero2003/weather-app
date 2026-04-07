import { useState } from "react";
import { getWeather } from "../services/weatherService";

export const useWeather = () => {
    const [data, setData]= useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);

    // funcion para obtener el clima, recibe una ciudad por parametro (viene del componente busqueda)
    const fetchWeather = async (city) => {
        
        if(!city) {
            setError("Please enter a city name");
            return;
        }
        
        try {
            setLoading(true);
            setError(null);
            //Limpia datos anteriores
            setData(null);

             // 🧪 SIMULACIÓN de API (delay para parecer real)
            setTimeout(() => {
                const mockData = {
                    city: city,
                    temperature: 25,
                    wind: 10,
                    rain: 30,
                    condition: "Cloudy",
                    hourly: [
                        { time: "10:00", temp: 24 },
                        { time: "13:00", temp: 26 },
                        { time: "16:00", temp: 23 },
                        { time: "19:00", temp: 22 },
                        { time: "22:00", temp: 20 },
                    ]
                };

                setData(mockData);
                setLoading(false);
            }, 1000);
            // const result = await getWeather(city);
            // setData(result);

        } catch (error) {
            if (error.response) {
                setError("City not found.Please try again.");
            } else{
                setError("Betwork error. Please try later");
            }
                
        } finally{
            setLoading(false)
        }
    };

    return {data, loading, error,fetchWeather}
}