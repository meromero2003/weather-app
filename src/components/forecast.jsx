
// componente que muestra el pronostico de las siguientes horas
const Forecast = ({ hourly }) => {
    if (!hourly) return null;

    return (
        <div>
            <h3>Next 24 Hours</h3>

            <div style={ {display:"flex", gap:"10px"}}>
                {hourly.map((hour,index)=> (
                    <div key={index} style={{border:"1px solid #ccc", padding:"10px"}}>
                        <p>{hour.time}</p>
                        <p>{hour.temp}°C</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Forecast;