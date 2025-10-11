function Testimonials() {
  return (
    <div className="testimonials-clean">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Our Reviews</h2>
          <p className="text-center">
            Our customers love us! Read what they have to say below.
          </p>
        </div>
        <div className="row people">
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                lacus...
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="https://image.ibb.co/kvZgzz/1.jpg"
                alt="reviewer"
              />
              <h5 className="name">Ben Johnson</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                est...
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="https://image.ibb.co/dgDVsK/3.jpg"
                alt="reviewer"
              />
              <h5 className="name">Carl Kent</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Aliquam varius finibus est, et interdum justo suscipit...
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="https://image.ibb.co/fbCeme/2.jpg"
                alt="reviewer"
              />
              <h5 className="name">Emily Clark</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;