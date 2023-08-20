import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const mockResults = [
    "https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA13517/PIA13517~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg",
  ];

  it("Renders Correctly", () => {
    const { asFragment } = render(<SearchResults results={mockResults} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
