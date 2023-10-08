import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SORT_OPTIONS from "../utils/constants";

const FilterContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort");
  const [selectedOption, setSelectedOption] = useState(
    sortBy || SORT_OPTIONS[0].value
  );

  const handleChange = (e) => {
    const query = e.target.value;
    setSelectedOption(query.toLowerCase());
    setSearchParams({ sort: query.toLowerCase() });
  };

  useEffect(() => {}, [searchParams]);

  return (
    <div className="mx-5 p-5 bg-gray-300">
      <div className=" flex gap-4">
        {/* Sort by  */}
        <div>
          <select onChange={handleChange} value={selectedOption}>
            {SORT_OPTIONS.map((option) => (
              <option name={option.value} key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Type */}
        <div>
          {/* <select onChange={handleChange} value={selectedOption}>
            {SORT_OPTIONS.map((option) => (
              <option name={option.value} key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
