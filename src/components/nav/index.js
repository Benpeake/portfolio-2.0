import { NavLink } from "react-router-dom";
import { animate, motion } from "framer-motion";
import "./nav.css";

function Nav() {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            opacity: {
              duration: 1,
              delay: 0.4,
            },
            y: {
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.2,
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
