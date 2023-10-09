import React from "react";
import { Outlet } from "react-router";
import ContentContainer from "./ContentContainer";
import FilterContainer from "./FilterContainer";
import PlayerCard from "./PlayerCard";

const Body = () => {
  return (
    <div className="flex flex-col">
      <FilterContainer />
      <ContentContainer />
    </div>
  );
};

export default Body;
