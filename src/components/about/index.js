import "./about.css";

function About() {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-sub-section">
          <div className="about-title">
            <div className="circle">1</div>
            <h3>Who am I</h3>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m detail-oriented, I loves to make thing, I love to learn
              and I&apos;m both pragmatic and creative. Outside of the digital
              realm my interests include food, illustration, football and chess.
            </p>
          </div>
        </div>
        <div className="about-sub-section">
          <div className="about-title">
            <div className="circle">2</div>
            <h3>My Story</h3>
          </div>
          <div className="about-copy">
            <p>
              After a successful 8 years in recruitment, where I played a
              pivotal role in shaping a start-up, I sought a new challenge.
              Taking a leap, I left my position to set up a street food business
              (coffee + cannoli if you're wondering!), giving myself the space
              to figure out what's next... In the time since, I&apos;ve taught
              myself graphic design and gained professional experience with{" "}
              <a
                className="body-link"
                href="https://fiasco.design/"
                target="_blank"
                rel="noopener"
              >
                <u>Fiasco Design</u>
              </a>
              {" "}through which I discovered a passion for coding, leading me to
              complete a full-stack bootcamp at{" "}
              <a
                className="body-link"
                href="https://io-academy.uk/"
                target="_blank"
                rel="noopener"
              >
                <u>iO-Academy</u>
              </a>
              .
            </p>
          </div>
        </div>
        <div className="about-sub-section">
          <div className="about-title">
            <div className="circle">3</div>
            <h3>Interests</h3>
          </div>
          <div className="about-copy">
            <p>
              Passionate about digital experiences that are seamless, memorable
              and useful! I&apos;m curios by the intersection of design and
              front-end development, and enjoy the UI/UX aspects of building
              applications ...that&apos;s not to say I don&apos;t get a kick out
              of building a robust RESTful API!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
