import "./SearchBar.css"
const SearchBar = ({ setSearchBar }, searchBar) => {

    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Search a game by price from $5 to $60"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
        />
    )
}

export default SearchBar;