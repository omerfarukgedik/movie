import { Routes, Route } from "react-router-dom";
import RouteList from "./routes";

import "./styles/app.scss";

const App = () => {
  return (
    <div className="App">
      <h4>Sample App</h4>
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
