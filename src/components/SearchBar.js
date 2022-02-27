import { useEffect, useState } from "react";
import "../styles/searchBar.scss";

const SearchBar = ({ isLoading, text, search }) => {
  const [searchText, setSearchText] = useState(text);
  const [year, setYear] = useState(null);
  const [type, setType] = useState(null);

  const handleKeypress = (e) =>
    e.key === "Enter" && search(e.target.value, year, type);

  // Fill Years
  const currentYear = parseInt(new Date().getFullYear());
  const years = [];
  for (let i = 2010; i <= currentYear; i++) {
    years.push(i);
  }

  // Fill Types
  const types = ["movie", "series", "episode"];

  useEffect(() => {
    setSearchText(text);
  }, [text]);

  return (
    <div className="search">
      <select
        name="year"
        onChange={(e) => setYear(e.target.value)}
        onKeyPress={handleKeypress}
        disabled={isLoading}
      >
        <option value="0">Year</option>

        {years.map((year, index) => (
          <option key={year + index} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        name="type"
        onChange={(e) => setType(e.target.value)}
        onKeyPress={handleKeypress}
        disabled={isLoading}
      >
        <option value="0">Type</option>

        {types.map((type, index) => (
          <option key={type + index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        value={searchText}
        placeholder="Search a movie"
        onKeyPress={handleKeypress}
        disabled={isLoading}
      />
      <div
        disabled={isLoading}
        onClick={() => search(searchText, year, type)}
        className={`search__button${isLoading ? "__disabled" : ""}`}
      >
        {isLoading ? "Loading..." : "Search"}
      </div>
    </div>
  );
};

export default SearchBar;
