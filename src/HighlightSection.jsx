function HighlightSection() {
  return (
    <div className="highlight-blue">
      <div className="container">
        <div className="intro">
          <img src="https://image.ibb.co/mwkoez/logo.gif" alt="logo" />
          <p className="text-center">
            Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
            Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p>
        </div>
        <div className="buttons">
          <a
            className="btn btn-primary"
            role="button"
            href="#"
            style={{ backgroundColor: "blue" }}
          >
            Lazertag
          </a>
          <a
            className="btn btn-primary"
            role="button"
            href="#"
            style={{ backgroundColor: "blue" }}
          >
            Arcade
          </a>
          <a
            className="btn btn-primary"
            role="button"
            href="#"
            style={{ backgroundColor: "blue" }}
          >
            Mini Golf
          </a>
        </div>
      </div>
    </div>
  );
}
export default HighlightSection;
