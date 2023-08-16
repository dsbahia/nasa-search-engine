import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
    it("Renders Correctly", () => {
        const { asFragment } = render(<Search />);
        expect(asFragment()).toMatchSnapshot();
    });
});