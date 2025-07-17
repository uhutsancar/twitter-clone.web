import { createBrowserRouter } from "react-router-dom";

import Explore from "~/pages/explore";
import Notification from "~/pages/notifications";
import NotFound from "~/pages/not-found";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
     {
        index:true,
        element:  <Home />   
     },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
