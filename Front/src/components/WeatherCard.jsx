
const WeatherCard = ({ data }) => {
    if (!data) return null;

    return (
        <div>
            <h2>{data.city}</h2>
            <p>{data.temperature}°C</p>
            <p>Wind: {data.wind} km/h</p>
            <p>Rain: {data.rain}%</p>
            <p>{data.condition}</p>
        </div>
    );
};

export default WeatherCard;