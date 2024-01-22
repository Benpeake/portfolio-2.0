import { NavLink } from "react-router-dom";
import { animate, motion } from "framer-motion";
import "./nav.css";

function Nav() {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50}}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            y: {
              duration: 0.6,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.6,
            },
            opacity: {
              duration: 0.6,
              ease: [0.12, 0, 0.39, 0],
              delay: 0.5,
            },
          },
        }}
      >
        <div className="left-nav">
          <NavLink to="/">Ben Peake</NavLink>
        </div>
        <div className="left-right">
          <NavLink className="navLink" to="/">
            Work
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
