import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, type Mock } from "vitest";
import { Table } from "../../../components/ui/Table";
import { useQuery } from "@tanstack/react-query";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

const mockTasks = [
  {
    id: "1",
    title: "Test Task",
    priority: "high",
    status: "pending",
    dueDate: "2025-09-02",
  },
];

describe("Table", () => {
  it("shows Loading... when loading", () => {
    (useQuery as Mock).mockReturnValue({ isLoading: true });

    render(<Table />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("shows error when there is an Error", () => {
    (useQuery as Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      error: { message: "fail" },
    });

    render(<Table />);
    expect(
      screen.getByText(/An error has occurred: fail/i)
    ).toBeInTheDocument();
  });

  it("shows the list of tasks", () => {
    (useQuery as Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockTasks,
    });

    render(<Table />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
    expect(screen.getByText("pending")).toBeInTheDocument();
    expect(screen.getByText("2025-09-02")).toBeInTheDocument();
  });
});
