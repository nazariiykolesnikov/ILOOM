import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    return (
        <div>
            <Navbar/>
            <div className="search-results__container">
                <div className="search-results__wrappper">
                    <div className="search-results">
                        <h2 className="search-results__heading">Результати пошуку для: {query}</h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SearchResults;
