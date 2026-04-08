
// componente que muestra el pronostico de las siguientes horas
const Forecast = ({ hourly }) => {
    if (!hourly) return null;

    return (
        <div>
            <h3>Next 24 Hours</h3>

            <div style={ {display:"flex", overflowX:"auto"}}>
                {hourly.map((hour,index)=> (
                    <div key={index} style={{ marginRight: "15px"}}>
                        <p>{hour.time.split(" ")[1]}</p>
                        <img src={`https:${hour.icon}`} alt="icon" />
                        <p>{hour.temp}°C</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Forecast;