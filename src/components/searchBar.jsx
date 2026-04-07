import { useState } from "react";

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