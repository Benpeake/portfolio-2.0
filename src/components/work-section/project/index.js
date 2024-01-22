import OutLinkBtn from "../../out-link-btn";
import "./project.css";
import { motion, useScroll } from "framer-motion";

function Project({ img, title, what, why, how, liveLink, github, tech }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{
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
      viewport={{ once: true }}
      className="project-container"
    >
      <div className="project-image-container">
        <img src={img} className="project-img" />
      </div>
      <div className="project-info-container">
        <div className="title-container">
          <h3>{title}</h3>
          <div className="tech-container">
            {tech.map((tech, index) => (
              <p className="smaller tech-item" key={index}>
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className="copy-info-container">
          <div className="project-subinfo-container">
            <div>
              <p className="project-subheading">What?</p>
            </div>
            <div>
              <p className="project-copy">{what}</p>
            </div>
          </div>
        </div>
        <div className="copy-info-container">
          <div className="project-subinfo-container">
            <div>
              <p className="project-subheading">Learning?</p>
            </div>
            <div>
              <p className="project-copy">{why}</p>
            </div>
          </div>
        </div>
        <div className="copy-info-container">
          <div className="project-subinfo-container">
            <div>
              <p className="project-subheading">How?</p>
            </div>
            <div>
              <p className="project-copy">{how}</p>
            </div>
          </div>
        </div>
        <div className="project-btn-container">
          <OutLinkBtn label={"Live-view"} link={liveLink} />
          <OutLinkBtn label={"Github"} link={github} />
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
