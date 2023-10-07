import React from "react";

const FilterContainer = () => {
  return (
    <div className="mx-5 p-5 bg-gray-300">
      <div className="">
        <select value={"name"} onChange={() => {}}>
          <option name="name"> Name </option>
          <option name="age"> Age </option>
          <option name="rank"> Rank </option>
        </select>
      </div>
    </div>
  );
};

export default FilterContainer;
