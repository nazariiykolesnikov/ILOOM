import "./LocationSearch.css";
import { assets } from "../../../assets/data/assets.js";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";

const LocationSearch = () => {
    const [showLocationInput, setShowLocationInput] = useState(false);
    const [location, setLocation] = useState("");

    const handleLocationClick = () => {
        setShowLocationInput(true);
    };

    return (
        <>
            <div className="navbar__center">
                <button
                    className="navbar__location"
                    onClick={handleLocationClick}
                >
                    {!showLocationInput && (
                        <>
                            <div className="navbar__location__text">
                                <span>Доставить в</span>
                                <span>{location || "Алматы, Казахстан"}</span>
                            </div>
                            <img
                                className="navbar__location__arrow"
                                src={assets.arrow_down} alt="Arrow Down"
                            />
                        </>
                    )}
                    <img
                        id="placement-detection__location_detection_logo"
                        src={assets.location_detection_logo_white}
                        alt="location detection logo"
                    />
                    {showLocationInput && (
                        <>
                            <input
                                type="text"
                                className="navbar__location__input"
                                placeholder="Адрес доставки"
                                value={location}
                                onChange={(e) => {
                                    setLocation(e.target.value)
                                }}
                            />
                        </>
                    )}
                </button>
                <SearchBar />
            </div>
        </>
    )
}

export default LocationSearch;