import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("Greeting", () => {
  const user = userEvent.setup();

  it("renders input with the correct placeholder", () => {
    render(<Greeting />);
    const inputElement = screen.getByPlaceholderText(/Skrifaðu nafn/i);
    expect(inputElement).toBeInTheDocument;
  });

  it("allows user to type text in input", async () => {
    render(<Greeting />);
    const inputElement = screen.getByPlaceholderText(/Skrifaðu nafn/i);
    await user.type(inputElement, "Ingzenegger");
    expect(inputElement).toHaveValue("Ingzenegger");
  });

  it("greets user on submit", async () => {
    render(<Greeting />);
    const inputElement = screen.getByPlaceholderText(/Skrifaðu nafn/i);
    await user.type(inputElement, "Ingzenegger");
    expect(inputElement).toHaveValue("Ingzenegger");
    const button = screen.getByRole("button", { name: /Senda/i });
    await user.click(button);
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "Halló, Ingzenegger!";
      }),
    ).toBeInTheDocument;
  });
});
