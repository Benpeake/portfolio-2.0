import "./footer.css";

function Footer() {

    function scrollToTop () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-left">
          <p>© Copyright 2024 | Site designed & built with ❤️ by Ben Peake</p>
        </div>
        <div className="footer-right">
          <p>
            <a
              className="link down"
              href="mailto:benpeake.dev@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </p>
          <p>
            <a
              className="link down"
              href="https://github.com/Benpeake"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
          </p>
          <p>
            <a
              className="link down"
              href="https://www.linkedin.com/in/ben-peake-5b162374/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </p>
          <div className="up-icon-container" onClick={scrollToTop}>
          <svg
          className="up-icon"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M6 20V3.825L1.4 8.4L0 7L7 0L14 7L12.6 8.425L8 3.825V20H6Z"
              fill="black"
            />
          </svg>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
