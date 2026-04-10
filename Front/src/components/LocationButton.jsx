const LocationButton = ({onClick}) => {
    return (
      <button onClick={onClick} style={{padding:"10px 15px", borderRadius:"10px", border:"none",
        cursor:"pointer",background:"rgba(225,225,225,0.2)", color:"white", 
        backdropFilter:"blur(10px)"}}>
        📍 Get Location
      </button>  
    );
}

export default LocationButton;