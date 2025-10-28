import { useNavigate } from "react-router-dom"
import { useState } from "react";

const SearchBar = () => {

    const [ search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSearch( event ){
        const value = event.target.value
        setSearch(value);
        if(!value){
            return
        }
        navigate(`searchResults/${value}`)
    }

    return (
         <div className="w-64">
         <input
            type="text"
            id="search"
            placeholder="Pesquisar produtos..."
            onChange={handleSearch}
            onFocus={() => navigate("searchWelcome")}
            onBlur={() => navigate("/")}
            value={search}
            className="pl-10 pr-3 py-1 w-64 bg-transparent border-b-2 border-black focus:border-black outline-none transition-colors duration-300"
          />

        <ul className="hidden absolute top-full left-0 w-full bg-white border shadow mt-1 z-10 max-h-60 overflow-y-auto">
            <li> Itens  </li>
        </ul>
        
        </div>
          
    )
}

export default SearchBar;