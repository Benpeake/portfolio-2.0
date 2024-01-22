import { NavLink } from "react-router-dom";
import { animate, motion } from "framer-motion";
import "./nav.css";
import { useEffect, useState } from "react";

function Nav() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <motion.nav
        className={scrolled ? "scrolled" : ""}
        initial={{ opacity: 0, y: -30}}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            y: {
              duration: 0.4,
              ease: [0.83, 0, 0.17, 1],
              delay: 1,
            },
            opacity: {
              duration: 0.4,
              ease: [0.12, 0, 0.39, 0],
              delay: 1.1,
            },
          },
        }}
      >
        <div className="left-nav bold">
          <NavLink to="/">Ben Peake</NavLink>
        </div>
        <div className="left-right">
          <NavLink className="navLink" to="/">
            Work
          </NavLink>
          <NavLink className="navLink" to="/">
            About
          </NavLink>
          <NavLink className="navLink" to="/">
            PixelPad
          </NavLink>
          <NavLink className="navLink" to="/">
            CV
          </NavLink>
        </div>
      </motion.nav>
    </>
  );
}

export default Nav;
