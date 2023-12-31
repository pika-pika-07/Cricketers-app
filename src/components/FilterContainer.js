import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SORT_OPTIONS, FILTER_OPTIONS } from "../utils/constants";
import { getObjectFromSearchParams } from "../utils/helper";

const FilterContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort");
  const filterBy = searchParams.get("filter");
  const searchBy = searchParams.get("search");
  const [selectedOption, setSelectedOption] = useState(
    sortBy || SORT_OPTIONS[0].value
  );

  const [selectedFilterOption, setSelectedFilterOption] = useState(
    filterBy || FILTER_OPTIONS[0].value
  );
  const [searchValue, setSearchValue] = useState(searchBy || "");

  const handleChange = (e) => {
    const query = e.target.value;
    setSelectedOption(query.toLowerCase());
    let params = getObjectFromSearchParams(searchParams);
    let updatedParams = { ...params, sort: query.toLowerCase() };
    setSearchParams(updatedParams);
  };

  const handleFilterChange = (e) => {
    const query = e.target.value;
    setSelectedFilterOption(query);
    let params = getObjectFromSearchParams(searchParams);
    let updatedParams = { ...params, filter: query };
    setSearchParams(updatedParams);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchValue(query);
    let params = getObjectFromSearchParams(searchParams);
    let updatedParams = { ...params, search: query === "" ? "all" : query };
    setSearchParams(updatedParams);
    // setSearchParams({ ...searchParams, search: query === "" ? "all" : query });
  };

  const resetFilters = () => {
    setSelectedFilterOption(FILTER_OPTIONS[0].value);
    setSelectedOption(SORT_OPTIONS[0].value);
    setSearchValue("");
  };

  useEffect(() => {
    if (
      !searchParams.has("filter") &&
      !searchParams.has("sort") &&
      !searchParams.has("search")
    ) {
      resetFilters();
    }
  }, [searchParams]);

  return (
    <div className="mx-5 p-5 bg-gray-300">
      <div className=" flex gap-4 ">
        {/* Sort by  */}
        <div>
          <select
            onChange={handleChange}
            value={selectedOption}
            className="rounded-lg"
          >
            {SORT_OPTIONS.map((option) => (
              <option name={option.value} key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Type */}
        <div>
          <select
            onChange={handleFilterChange}
            value={selectedFilterOption}
            className="rounded-lg"
          >
            {FILTER_OPTIONS.map((option) => (
              <option
                name={option.value}
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search  */}

        <div>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search By Name"
            className="px-2 rounded-lg"
          />
        </div>

        <div>
          <Link to="/">
            <button className="bg-white px-3 rounded-lg">Clear Filters</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
