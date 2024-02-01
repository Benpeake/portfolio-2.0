import "./pixel-pad-intro.css";
import { motion } from "framer-motion";

function PixelPadIntro() {
  return (
    <>
      <section className="pizel-pad-intro-section">
        <motion.h2
          initial={{ opacity: 1}}
          animate={{
            opacity: 1,
            transition: {
              opacity: {
                duration: .6,
                ease: [0.12, 0, 0.39, 0],
                delay: 0,
              },
            },
          }}
        >
          A journal of little things I've built & designed, from past projects
          or for fun.
        </motion.h2>
      </section>
    </>
  );
}

export default PixelPadIntro;
