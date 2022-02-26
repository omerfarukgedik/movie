import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";

const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <SingleMovie />,
  },
];

export default ROUTES;
