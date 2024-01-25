import { Link, NavLink } from "react-router-dom";
import { animate, motion } from "framer-motion";
import "./nav.css";
import { useEffect, useState } from "react";

function Nav({ onLanding }) {
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
        initial={{ opacity: 0, y: -30 }}
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
          <a download className="navLink" href={process.env.PUBLIC_URL + "/pdf/benpeake-CV.pdf"} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>
      </motion.nav>
    </>
  );
}

export default Nav;
