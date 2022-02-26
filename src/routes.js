import Home from "./pages/Home";
import Movie from "./pages/Movie";

const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Movie />,
  },
];

export default ROUTES;
