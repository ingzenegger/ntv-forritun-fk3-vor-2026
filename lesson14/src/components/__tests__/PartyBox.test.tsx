import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PartyBox from "../PartyBox/partyBox";

describe("PartyBox", () => {
  it("changes the background color when clicked", async () => {
    const user = userEvent.setup();
    render(<PartyBox />);
    const partyDiv = screen.getByTestId("color-container");
    const button = screen.getByRole("button", { name: "Party!" });

    expect(partyDiv.style.backgroundColor).toBe("red");

    await user.click(button);

    expect(partyDiv.style.backgroundColor).toBe("blue");

    await user.click(button);
    expect(partyDiv.style.backgroundColor).toBe("aqua");
  });
});
