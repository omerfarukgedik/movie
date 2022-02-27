import { Routes, Route, Link } from "react-router-dom";
import RouteList from "./routes";

import "./assets/styles/app.scss";

const App = () => {
  return (
    <div className="App">
      <Link to="/">
        {" "}
        <h2>Movie App</h2>
      </Link>
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
