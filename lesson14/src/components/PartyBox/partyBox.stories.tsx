import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, userEvent, expect, fn } from "storybook/test";

import PartyBox from "./partyBox";

const meta = {
  component: PartyBox,
  title: "PartyBox",
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PartyBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InteractiveDemo: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /Party!/i });
    const container = canvas.getByTestId("color-container");
    //cycle throught the colors onclick - changing one expected color makes the test fail
    await expect(container.style.backgroundColor).toBe("red");
    await userEvent.click(button);
    await expect(container.style.backgroundColor).toBe("blue");
    await userEvent.click(button);
    await expect(container.style.backgroundColor).toBe("aqua");
    await userEvent.click(button);
    await expect(container.style.backgroundColor).toBe("orange");
    await userEvent.click(button);
    await expect(container.style.backgroundColor).toBe("yellow");
    await userEvent.click(button);
    await expect(container.style.backgroundColor).toBe("green");
    await userEvent.click(button);

    await expect(container.style.backgroundColor).toBe("purple");
    await userEvent.click(button);

    await expect(container.style.backgroundColor).toBe("pink");
    //make sure it goes back to the first color after cycling through:
    await userEvent.click(button);
    await expect(container.style.backgroundColor).toBe("red");
  },
};
