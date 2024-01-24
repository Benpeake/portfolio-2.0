import { useState } from "react";
import "./palette-picker.css";

function PalettePicker() {
  const [hoveredColor, setHoveredColor] = useState(null);
  const [colors, setColors] = useState([
    "#6e44ff",
    "#b892ff",
    "#ffc2e2",
    "#ff90b3",
    "#ff4e60",
  ]);

  function generateRandomHex() {
    const characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateRandomColors() {
    console.log("click");
    const newColors = colors.map(() => generateRandomHex());
    setColors(newColors);
  }

  function handleColorPanelClick(color) {
    const textarea = document.createElement("textarea");
    textarea.value = color;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      navigator.clipboard
        .writeText(color)
        .then(() => {
          console.log("Color hex copied to clipboard");
        })
        .catch((err) => {
          console.error("Unable to copy color hex to clipboard", err);
        });
    } catch (err) {
      console.error("Clipboard API not supported", err);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function getContrastColor(hexColor) {
    const hex = hexColor.slice(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "var(--black)" : "var(--white)";
  }

  return (
    <>
      <div className="color-palette-picker-container">
        <div className="colors-container">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color-panel ${
                hoveredColor === color ? "hovered-color-panel" : ""
              }`}
              style={{
                backgroundColor: color,
                width: hoveredColor === color ? "30%" : "auto",
                color: getContrastColor(color),
              }}
              onMouseEnter={() => setHoveredColor(color)}
              onMouseLeave={() => setHoveredColor(null)}
              onClick={() => {
                handleColorPanelClick(color);
              }}
            >
              {hoveredColor === color && <p className="hex-number">{color}</p>}
            </div>
          ))}
        </div>
        <div className="pp-button-container">
          <button onClick={generateRandomColors}>Show me new colors!</button>
        </div>
      </div>
    </>
  );
}

export default PalettePicker;
