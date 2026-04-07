import axios from "axios";
const API_URL= "https://localhost:5000";

export const getWeather= async (city) => {
    const response = await axios.get('${API_URL}/weather?city=${city}');
    return response.data;
}
