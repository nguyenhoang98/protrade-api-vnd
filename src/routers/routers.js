import HomePage from "../pages/HomePage/HomePage";
import TutorialPage from "../pages/Tutorial/TutorialPage";
import AssetPage from "../pages/AssetPage/AssetPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFound from "../pages/NotFound/NotFound";
const routers = [
  {
    component: () => <HomePage />,
    path: "/home",
    exact: true,
  },
  {
    component: () => <TutorialPage />,
    path: "/tutorial-page",
    exact: false,
  },
  {
    component: () => <AssetPage />,
    path: "/asset-page",
    exact: false,
  },
  {
    component: () => <LoginPage />,
    path: "/login-page",
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: "*",
    exact: false,
  },
];

export default routers;
