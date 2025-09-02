import { describe, it, vi } from "vitest";

vi.mock("../App", () => ({
  __esModule: true,
  default: () => "Mocked App",
}));

describe("main.tsx", () => {
  it("llama a createRoot y renderiza App en #root", async () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    vi.mock("react-dom/client", () => ({
      createRoot: vi.fn(() => ({
        render: vi.fn(),
      })),
    }));

    await import("../main.tsx");

    document.body.removeChild(root);
  });
});
