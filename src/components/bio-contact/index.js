import { motion } from "framer-motion";
import "./bio-contact.css";


function BioContact ({ title, link, linkText, nonLinkText, mobileHide }) {

    return (
      <div className={`bio-text-overlay ${mobileHide ? 'mobileHide' : ''}`}>
      <motion.div
        key={title} 
        initial={{x: -1000, opacity: 0.1}}
        animate={{x: 0, opacity: 1,
          transition: {
            duration: .6,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.3,
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