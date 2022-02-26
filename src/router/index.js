import RouteList from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RouteList.map((item, index) => (
          <Route
            key={index + item.path}
            path={item.path}
            element={item.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
