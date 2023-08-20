import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";

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
    render(<Search setSearchResults={setSearchResultsMock} />);
    const inputElement = screen.getByPlaceholderText("Enter keywords...");
    const submitButton = screen.getByText("Go!");

    fireEvent.change(inputElement, { target: { value: "moon" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(setSearchResultsMock).toHaveBeenCalledWith(expect.any(Array));
    });
  });
});
