import Home from "./pages/Home";
import Id from "./pages/[id]";

const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Id />,
  },
];

export default ROUTES;
