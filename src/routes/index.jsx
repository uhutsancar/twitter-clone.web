import { createBrowserRouter } from "react-router-dom";

import Explore from "~/pages/explore";
import Notification from "~/pages/notifications";
import NotFound from "~/pages/not-found";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";

import Profile from "~/pages/profile";
import Bookmarks from "~/pages/bookmarks";

import Messages from "~/pages/message";
import Lists from "~/pages/lists";

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
        path: ":sluq",
        element: <Profile />,
      },
        {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
           {
        path: "/messages",
        element: <Messages/>,
      },
           {
        path: "/lists",
        element: <Lists />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
