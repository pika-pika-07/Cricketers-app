import { render, screen } from "@testing-library/react";
import Header from "../Header.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("should load Header Component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
