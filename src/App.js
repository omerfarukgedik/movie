import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RouteList from "./routes";

import "./styles/app.scss";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [params, setParams] = useSearchParams();

  const search = (text) => {
    if (text) {
      setParams({ ...params, search: text, page: 1 });
    }
  };

  useEffect(() => {
    const querySearch = params.get("search");
    const queryPage = params.get("page");

    setParams({
      ...params,
      search: querySearch || "Pokemon",
      page: queryPage || 1,
    });

    setPage(params.get("page"));
    setSearchText(params.get("search"));
  }, []);

  return (
    <div className="App">
      <h4>Sample App</h4>
      <SearchBar text={searchText} search={search} />
      <Routes>
        {RouteList.map((item, index) => (
          <Route
            key={index + item.path}
            path={item.path}
            element={item.element}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
