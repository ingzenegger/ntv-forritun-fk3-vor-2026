import { QuoteCard } from "./QuoteCard";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("QuoteCard", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("will fetch and display a quote when button is clicked", async () => {
    const user = userEvent.setup();
    const mockQuote =
      "„God willing, we will all meet again in Spaceballs 2: The Search for More Money“ — Mel Brooks";

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        content:
          "God willing, we will all meet again in Spaceballs 2: The Search for More Money",
        author: "Mel Brooks",
      }),
    });
    render(<QuoteCard />);
    const button = screen.getByRole("button", { name: /Sækja quote/i });
    await user.click(button);
    const quoteElement = await screen.findByRole("status");
    expect(quoteElement).toHaveTextContent(mockQuote);
  });

  it("displays the error message when API call fails", async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({ ok: false });

    render(<QuoteCard />);
    await user.click(screen.getByRole("button", { name: /Sækja quote/i }));

    const errorElement = await screen.findByRole("alert");
    expect(errorElement).toHaveTextContent(/Ekki tókst að sækja quote./i);
  });
});
