import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";

describe("Counter", () => {
  const user = userEvent.setup();

  it("increment count on click", async () => {
    render(<Counter />);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Gildi: 0";
      }),
    ).toBeInTheDocument();
    const button = screen.getByRole("button", { name: /Hækka/i });
    await user.click(button);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Gildi: 1";
      }),
    ).toBeInTheDocument();
  });

  it("decrement count on click", async () => {
    render(<Counter />);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Gildi: 0";
      }),
    ).toBeInTheDocument();
    const button = screen.getByRole("button", { name: /Minnka/i });
    await user.click(button);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Gildi: -1";
      }),
    ).toBeInTheDocument();
  });

  it("reset counter", async () => {
    render(<Counter />);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Gildi: 0";
      }),
    ).toBeInTheDocument();
    const button = screen.getByRole("button", { name: /Hækka/i });
    await user.click(button);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Gildi: 1";
      }),
    ).toBeInTheDocument();
    const resetButton = screen.getByRole("button", { name: /Endurstill/i });
    await user.click(resetButton);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Gildi: 0";
      }),
    ).toBeInTheDocument();
  });
});
