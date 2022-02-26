import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Router from "./router/index";

import "./styles/app.scss";

const App = () => {
  const [searchText, setSearchText] = useState("Pokemon");
  const search = (text) => {
    if (text) {
      console.log(text);
    }
  };

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <div className="App">
      <h4>Sample App</h4>
      <SearchBar text={searchText} search={search} />
      <Router />
    </div>
  );
};

export default App;
