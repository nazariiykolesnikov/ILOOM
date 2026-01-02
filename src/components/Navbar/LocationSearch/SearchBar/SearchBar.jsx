import { assets } from "../../../../assets/data/assets.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <>
            <div className="navbar__search">
                <img
                    className="navbar__search--logo"
                    src={assets.search}
                    alt="Search"
                />
                <input
                    className="navbar__search--input"
                    type="text"
                    placeholder="Введите запрос"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </>
    )
}

export default SearchBar;