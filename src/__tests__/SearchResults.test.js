import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("Renders and matches Snapshot", () => {
    const { asFragment } = render(<SearchResults results="" />);
    expect(asFragment).toMatchSnapshot();
  });
});
