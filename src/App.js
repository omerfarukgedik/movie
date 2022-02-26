import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RouteList from "./routes";

import "./styles/app.scss";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  const search = (text) => {
    setParams({ ...params, search: text || "Pokemon", page: 1 });
  };

  useEffect(() => {
    console.log("rendered again");
    const querySearch = params.get("search");
    const queryPage = params.get("page");

    console.log(querySearch);

    setParams({
      ...params,
      search: querySearch || "Pokemon",
      page: queryPage || 1,
    });

    setPage(params.get("page"));
    setSearchText(params.get("search"));
  }, [params]);

  return (
    <div className="App">
      <h4>Sample App</h4>
      <SearchBar text={searchText} search={search} />
      <Routes>
        {RouteList.map((item, index) => {
          return (
            <Route
              key={index + item.path}
              path={item.path}
              element={item.element}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
