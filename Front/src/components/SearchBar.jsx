import { useState } from "react";

//componente de busqueda, recivbe una fucnion que toma el nombre de la ciudad y se lo pasa al hook para obtener la informacion
const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a city:"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
            />
            <button onClick={()=> onSearch(city)}>
                Search
            </button>
        </div>
    );  
};

export default SearchBar;