import { Link, NavLink } from "react-router-dom";
import { animate, motion } from "framer-motion";
import "./nav.css";
import { useEffect, useState } from "react";

function Nav({ onLanding }) {
  const [scrolled, setScrolled] = useState(false);
  const vh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const relativeYOffset = -vh * 0.04; 

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <motion.nav
        className={scrolled ? "scrolled" : ""}
        id="top-section"
        initial={{ opacity: 0.01, y: relativeYOffset }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            y: {
              duration: 0.4,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.7,
            },
            opacity: {
              duration: 0.2,
              ease: [0.12, 0, 0.39, 0],
              delay: 0.8,
            },
          },
        }}
      >
        <div className="left-nav bold">
          {onLanding ? (
            <Link onClick={scrollToTop}>Ben Peake</Link>
          ) : (
            <Link to="/">Ben Peake</Link>
          )}
        </div>
        <div className="left-right">
          {onLanding ? (
            <Link className="navLink" onClick={scrollToTop}>
              Work
            </Link>
          ) : (
            <Link className="navLink" to="/">Work</Link>
          )}
          <Link className="navLink" to="/#about-section">
            About
          </Link>
          <NavLink className="navLink" to="/pixelpad">
            PixelPad
          </NavLink>
          <a className="navLink" href="https://benpeake.github.io/cv/benpeake-cv.pdf" target="_blank" rel="noopener">
            CV
          </a>
        </div>
      </motion.nav>
    </>
  );
}

export default Nav;
