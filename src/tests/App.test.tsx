import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders Vite + React heading", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toHaveTextContent("count is 0");
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });
});
