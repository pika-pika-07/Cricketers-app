import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";

const heading = <h1> Hello jsx </h1>;
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root")); // Creating a Root for React

root.render(<AppLayout />); // Rendering the APPlayout inside root
