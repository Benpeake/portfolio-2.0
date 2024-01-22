import { motion } from "framer-motion";
import "./bio.css";
import BioContact from "../bio-contact";
import { useEffect, useState } from "react";

function Bio() {
  const [bioLines, setBioLines] = useState([
    "Front-end focused, full-stack developer.",
    "Background in graphic design.",
    "Interest in creative digital experiences.",
  ]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 900) {
        setBioLines(["Front-end focused,", "full-stack developer."]);
      } else {
        setBioLines([
          "Front-end focused full-stack developer.",
          "Background in graphic design.",
          "Interest in creative digital experiences.",
        ]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="bio-section">
        <div>
          {bioLines.map((line, index) => (
            <div className="bio-text-overlay" key={index}>
              <motion.h2
                initial={{ opacity: 0.01, y: 100 }}
                animate={{
                  y: 0,
                  opacity: .8,
                  transition: {
                    y: {
                      duration: 0.8,
                      ease: [0.33, 1, 0.68, 1],
                      delay: 0.4,
                    },
                    opacity: {
                      duration: 1,
                      ease: [0.12, 0, 0.39, 0],
                      delay: 0.2,
                    },
                  },
                }}
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-section" id="work-section">
        <BioContact
          title="Contact"
          link="mailto:benpeake.dev@gmail.com"
          linkText="benpeake.dev@gmail.com"
        />
        <BioContact
          title="Github"
          link="https://github.com/Benpeake"
          linkText="@benpeake"
        />
        <BioContact
          title="Location"
          nonLinkText="Bath, UK"
          mobileHide="mobileHide"
        />
      </section>
    </>
  );
}

export default Bio;
