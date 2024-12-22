import "./SearchBar.css"
const SearchBar = ({ setSearchBar }, searchBar) => {

    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Search for a game"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
        />
    )
}

export default SearchBar;