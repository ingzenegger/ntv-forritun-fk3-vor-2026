//I was bored
import "./partybox.style.css";
import { useState } from "react";

export default function PartyBox() {
  const colors: string[] = [
    "red",
    "blue",
    "aqua",
    "orange",
    "yellow",
    "green",
    "purple",
    "pink",
  ];
  const [colorIndex, setColourIndex] = useState(0);
  const cycleColor = () => {
    setColourIndex((prevIndex: number) => (prevIndex + 1) % colors.length);
  };
  return (
    <div data-testid="color-container" className="party" style={{ backgroundColor: colors[colorIndex] }}>
      <button onClick={cycleColor}>Party!</button>
    </div>
  );
}
