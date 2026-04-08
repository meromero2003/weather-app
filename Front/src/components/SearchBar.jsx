import { useState } from "react";

//componente de busqueda, recivbe una fucnion que toma el nombre de la ciudad y se lo pasa al hook para obtener la informacion
const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    return (
        <div style={{ display:"flex", gap:"10px", background:"rgba(255,255,255,0.)", 
        borderRadius:"15px", padding:"10px", color:"white", outline:"none"}}>
            <input
                type="text"
                placeholder="Enter a city:"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
            />
            <button onClick={()=> onSearch(city)} 
            style={{padding:"10px 15px", borderRadius:"10px", border:"none",
            background:"#ffffff", cursor:"pointer", fontWeight:"bold"}}>

                Search
            </button>
        </div>
    );  
};

export default SearchBar;