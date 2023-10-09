import React from "react";
import ContentContainer from "./ContentContainer";
import FilterContainer from "./FilterContainer";

const Body = () => {
  return (
    <div className="flex flex-col">
      <FilterContainer />
      <ContentContainer />
    </div>
  );
};

export default Body;
