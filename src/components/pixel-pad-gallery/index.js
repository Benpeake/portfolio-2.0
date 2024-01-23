import PalettePicker from "../../pixel-pad-components/palette-picker";
import "./pixel-pad-gallery.css";

function PixelPadGallery() {
  const components = [
    {
      id: 0,
      component: PalettePicker,
      layout: "vertical-down",
      copy: "Hover to see hex value, click to copy to clipboard!",
      title: "hex-color widget",
      titleColor: "#FFFFFF",
      titleBgColor: "#B9B5AB",
      bgColor: "#E4E2DD",
      fontColor: "#000"
    },
  ];

  return (
    <>
      <section className="pixel-pad-gallery-section">
        {components.map((item, index) => {
          const Component = item.component;
          return (
        <div className="component-container"
        style={{backgroundColor: item.bgColor}}
        >
            <div className="component-title"
            style={{
                backgroundColor: item.titleBgColor,
                color: item.titleColor,
              }}
            >
                {item.title}
            </div>
            <div className="component">
            <Component
                key={index}
                bgColor={item.bgColor}
                layout={item.layout}
                copy={item.copy}
            />
            </div>
            <div className="component-info"
            style={{
                borderColor: item.titleBgColor,
                color: item.fontColor
              }}
            >
                {item.copy}
            </div>
        </div>
          );
        })}
      </section>
    </>
  );
}

export default PixelPadGallery;
