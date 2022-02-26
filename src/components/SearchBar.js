import { useState } from "react";
import "../styles/searchBar.scss";

const SearchBar = ({ text, search }) => {
  const [searchText, setSearchText] = useState(text);

  const handleKeypress = (e) => e.key === "Enter" && search(e.target.value);

  return (
    <div className="search">
      <input
        onChange={(evt) => setSearchText(evt.target.value)}
        type="text"
        defaultValue={text}
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
