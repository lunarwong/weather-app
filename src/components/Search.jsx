import '../css/search.css'
import { useState } from "react";

const Search = ({onSearchChange})=> {

    const [search, setSearch] = useState("");
    
    const handleOnChange = (searchData) => {
        const searchValue = searchData.target.value;
        setSearch(searchValue);
        onSearchChange(searchValue);
    }

    const submitSearch = (event) => {
        event.preventDefault();
        if (search) {
            onSearchChange(search);
        }
    }

    return (
        <form onSubmit={submitSearch}>
            <input 
                placeholder="Enter city"
                value={search}
                onChange={handleOnChange}
                debouncetimeout={600}
            />
            <button>Search</button>
        </form>
    )
}

export default Search