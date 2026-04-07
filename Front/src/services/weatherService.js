import axios from "axios";
const API_URL= "https://localhost:5000";

// Servicio que se conecta a la api para obtener datos, recibe ciudad por parametro
export const getWeather= async (city) => {
    const response = await axios.get('${API_URL}/weather?city=${city}');
    return response.data;
}
