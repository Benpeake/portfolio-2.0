import "./out-link-btn.css";

function OutLinkBtn({ link, label }) {
  return (
    <>
      <div className="out-link-btn">
        <div className="btn-container">
          <a href={link} target="_blank" rel="noopener">{label}</a>
          <svg
            className="arrow-icon"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="arrow"
              d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default OutLinkBtn;
