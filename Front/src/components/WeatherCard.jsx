
const WeatherCard = ({ data }) => {
    if (!data) return null;

    return (
        <div style={
            {background:"rgba(255,255,255,0.15)", borderRadius:"25px", 
            border:"1px solid rgba(255,255,255,0.3)", padding:"25px", 
            marginTop:"20px", backdropFilter:"blur(15px)", textAlign:"center", 
            boxShadow:"0 8px 32px rgba(0,0,0,0.2)"}}>
            <h2>{data.city}</h2>
            <p>{data.temperature}°C</p>
            <p>Wind: {data.wind} km/h</p>
            <p>Rain: {data.rain}%</p>
            <p>{data.condition}</p>
        </div>
    );
};

export default WeatherCard;