import React from "react";
import ReactDOM from "react-dom/client";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import PlayerDetails from "./src/components/PlayerDetails";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Body /> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "player",
        element: <PlayerDetails />,
      },
    ],
  },
]);

const AppLayout = () => {
  return <RouterProvider router={appRouter} />;
};
const root = ReactDOM.createRoot(document.querySelector("#root")); // Creating a Root for React

root.render(<AppLayout />); // Rendering the APPlayout inside root
