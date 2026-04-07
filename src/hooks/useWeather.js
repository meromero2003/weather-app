import { useState } from "react";
import { getWeather } from "../services/weatherService";

export const useWeather = () => {
    const [data, setData]= useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);

    const fetchWeather = async (city) => {
        try {
            setLoading(true);
            setError(null);

            const result = await getWeather(city);
            setData(result);
        } catch (error) {
            setError("City not found")     
        } finally{
            setLoading(false)
        }
    };

    return {data, loading, error,fetchWeather}
}