import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <MovieDetail />,
  },
];

export default ROUTES;
