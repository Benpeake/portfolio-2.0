import Clock from "../../pixel-pad-components/clock";
import PalettePicker from "../../pixel-pad-components/palette-picker";
import ViridisLogo from "../../pixel-pad-components/viridis-logo";
import "./pixel-pad-gallery.css";

function PixelPadGallery() {
  const components = [
    {
      id: 0,
      component: Clock,
      copy: "a digitised Karlsson flip clock",
      title: "Time & Date Keeper",
      titleColor: "#FFFFFF",
      titleBgColor: "#1A2218",
      bgColor: "#B9B5AB",
      fontColor: "#1A2218"
    },
    {
      id: 1,
      component: ViridisLogo,
      copy: "logo design and svg animation",
      title: "Viridis Logo",
      titleColor: "#FFFFFF",
      titleBgColor: "#1A2218",
      bgColor: "#fff",
      fontColor: "#1A2218"
    },
    {
      id: 2,
      component: PalettePicker,
      copy: "Hover to see hex-value, click to copy!",
      title: "Hex-Color Widget",
      titleColor: "#FFFFFF",
      titleBgColor: "#000",
      bgColor: "#FFFAED",
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
        key={index}
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
