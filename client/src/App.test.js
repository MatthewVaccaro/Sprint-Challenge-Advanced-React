import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("Does it render", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Test/i);
  expect(linkElement).toBeVisible();
});
