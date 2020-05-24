import Home from "./routes/Home";
import Menu from "./routes/Menu";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/menu",
    exact: true,
    component: Menu
  }
];

export default routes;
