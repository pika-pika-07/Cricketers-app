import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FilterContainer from "../FilterContainer.js";

test("should load Filter Container Component with select options", () => {
  render(
    <BrowserRouter>
      <FilterContainer />
    </BrowserRouter>
  );
  expect(screen.getAllByRole("option")).toHaveLength(8);
});

test("should load clear filters button inside FilterContainer", () => {
  render(
    <BrowserRouter>
      <FilterContainer />
    </BrowserRouter>
  );

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
