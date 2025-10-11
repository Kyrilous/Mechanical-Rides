function Articles() {
  return (
    <div className="article-list">
      <div className="container">
        <div className="row articles">
          <div className="col-sm-6 col-md-4 item">
            <a href="#">
              <img
                src="https://image.ibb.co/g9PEKz/img1.jpg"
                className="img-fluid"
                alt="Games"
              />
            </a>
            <h3 className="name">GAMES</h3>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus
              lacus...
            </p>
          </div>
          <div className="col-sm-6 col-md-4 item">
            <a href="#">
              <img
                src="https://image.ibb.co/jdKQRe/img2.jpg"
                className="img-fluid"
                alt="Parties"
              />
            </a>
            <h3 className="name">PARTIES</h3>
            <p className="description">
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus
              est...
            </p>
          </div>
          <div className="col-sm-6 col-md-4 item">
            <a href="#">
              <img
                src="https://image.ibb.co/epyKme/img3.png"
                className="img-fluid"
                alt="Dates"
              />
            </a>
            <h3 className="name">DATES</h3>
            <p className="description">
              Aliquam varius finibus est, interdum justo suscipit id...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;