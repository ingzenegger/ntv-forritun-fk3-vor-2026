import { describe, it, expect, vi } from "vitest";
import { fetchRandomQuote } from "./quotes";

describe("fetchRandomQuote", () => {
  it("returns a formatted quote when fetch is successful", async () => {
    const mockData = {
      content:
        "God willing, we will all meet again in Spaceballs 2: The Search for More Money",
      author: "Mel Brooks",
    };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });
    const result = await fetchRandomQuote();
    expect(result).toBe(
      "„God willing, we will all meet again in Spaceballs 2: The Search for More Money“ — Mel Brooks",
    );
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.api-ninjas.com/v2/randomquotes",
    );
  });

  it("throws an error if response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });
    await expect(fetchRandomQuote()).rejects.toThrow(
      "Ekki tókst að sækja quote",
    );
  });
});
