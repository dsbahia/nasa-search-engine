import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("Renders Correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Displays NASA Logo", () => {
    render(<App />);
    const logoElement = screen.getByAltText("Nasa Logo");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg");
  });

  it("Displays Search Component", () => {
    render(<App />);
    const searchElement = screen.getByPlaceholderText("Enter keywords...");
    expect(searchElement).toBeInTheDocument();
  });
});
