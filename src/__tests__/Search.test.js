import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import * as getImages from "../requests/getImages";

describe("Search", () => {
  it("Renders Correctly", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Updates input value when typing", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText("Enter keywords...");

    fireEvent.change(inputElement, {target: { value: "space" }} );
    
    expect(inputElement.value).toBe("space");
  });

  it("Calls setSearchResults when form is submitted", async () => {
    const setSearchResultsMock = jest.fn();
    const mockReturn = jest.fn();
    jest.spyOn(getImages, "default").mockResolvedValue(mockReturn);

    render(<Search setSearchResults={setSearchResultsMock} />);
    const inputElement = screen.getByPlaceholderText("Enter keywords...");
    const submitButton = screen.getByText("Go!");

    const input = "moon"
    fireEvent.change(inputElement, { target: { value: input } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getImages.default).toBeCalledWith(input)
    });

    await waitFor(() => {
      expect(setSearchResultsMock).toHaveBeenCalledWith(mockReturn);
    });
  });
});
