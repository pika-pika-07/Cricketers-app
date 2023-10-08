import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
  },
]);

const AppLayout = () => {
  return <RouterProvider router={appRouter} />;
};
const root = ReactDOM.createRoot(document.querySelector("#root")); // Creating a Root for React

root.render(<AppLayout />); // Rendering the APPlayout inside root
