import { useEffect, useState } from "react";
import "../styles/searchBar.scss";

const SearchBar = ({ text, search }) => {
  const [searchText, setSearchText] = useState(text);

  const handleKeypress = (e) => e.key === "Enter" && search(e.target.value);

  useEffect(() => {
    setSearchText(text);
  }, [text]);

  return (
    <div className="search">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        value={searchText}
        placeholder="Search a movie"
        onKeyPress={handleKeypress}
      />
      <div onClick={() => search(searchText)} className="search__button">
        Search
      </div>
    </div>
  );
};

export default SearchBar;
