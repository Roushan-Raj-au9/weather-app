const SearchBar = ({ city, onCityChange, onSearch, unit }) => {
    return (
        <form className="search-bar">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={onCityChange}
            />
        </form>
    );
};

export default SearchBar