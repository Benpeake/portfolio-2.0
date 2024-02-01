import { motion } from "framer-motion";
import "./bio-contact.css";


function BioContact ({ title, link, linkText, nonLinkText, mobileHide }) {

    return (
      <div className={`bio-text-overlay ${mobileHide ? 'mobileHide' : ''}`}>
      <motion.div
        key={title} 
        initial={{x: -200, opacity: 0.01}}
        animate={{x: 0, opacity: 1,
          transition: {
            x: {
              duration: 0.4,
              ease: [0.83, 0, 0.17, 1],
              delay: .3,
            },
            opacity: {
              duration: .4,
              ease: [0.12, 0, 0.39, 0],
              delay: 0.4,
            },
          },
        }}

        className="contact-detail-container">
        <p className="bold">{title}</p>
        {link ? (
          <p>
            <a className="link" href={link} target="_blank" rel="noopener">
              {linkText}
            </a>
          </p>
        ) : (
          <p>{nonLinkText}</p>
        )}
      </motion.div>
      </div>
    );
  };

export default BioContact