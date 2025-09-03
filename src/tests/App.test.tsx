import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "@/App";

vi.mock("@/components/ui/Table", () => {
  return {
    Table: () => <div>Mocked Table Component</div>,
  };
});

vi.mock("@tanstack/react-query", async () => {
  const actual = await vi.importActual("@tanstack/react-query");

  return {
    ...actual,
    QueryClientProvider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe("App", () => {
  it("renders heading and Table", () => {
    render(<App />);
    expect(screen.getByText(/Volkswagen Digital:Hub/i)).toBeInTheDocument();
  });

  it("renders mocked Table component", () => {
    render(<App />);
    expect(screen.getByText(/Mocked Table Component/i)).toBeInTheDocument();
  });
});
