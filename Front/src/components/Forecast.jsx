
// componente que muestra el pronostico de las siguientes horas
const Forecast = ({ hourly }) => {
    if (!hourly) return null;

    return (
        <div style={{marginTop:"20px"}}>
            <h3>Next 24 Hours</h3>

            <div style={ {display:"flex", overflowX:"auto", gap:"10px", padding:"10px 0"}}>
                {hourly.map((hour,index)=> (
                    <div key={index} style={{ minWidth:"80px", background:"rgba(225,225,225,0.15)",
                        borderRadius:"15px", padding:"10px", textAlign:"center", 
                        backdropFilter:"blur(10px)", boxShadow:"0 4px 16px rgba(0,0,0,0.)"}}>

                        <p>{new Date(hour.time).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' })}
                        </p>
                        <img src={`https:${hour.icon}`} alt="icon" style={{width:"80px"}} />
                        <p>{hour.temp}°C</p>
                        
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Forecast;