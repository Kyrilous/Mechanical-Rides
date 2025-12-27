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
                My school had a pep rally today and top line outdid themselves. Our students had a blast, staff, and parent volunteers. 
                They worked with us on our budget and we’re on time, friendly, and really wanted the kids to have a good time. Can't wait for our
                next event! Thank you!
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="public\assets\reviews\Gilda_Review.png"
                alt="reviewer"
              />
              <h5 className="name">Gilda Capellan</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
               Amazing , reliable, and affordable company. I’ve rented tents, tables and chairs for a party over 70 in my back yard and 
               they did not disappoint. I even rented a heater for inside the tent. They are very reliable and set up and took down everything. 
               Highly recommend!
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="public\assets\reviews\Maggie_Review.png"
                alt="reviewer"
              />
              <h5 className="name">Maggie Somerville</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                I've used Top Line Party Rental several times over the last couple of years for my corporate events. 
                They are truly the best with the best equipment, rentals, staff and prices. I look forward to our next event with them.
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="public\assets\reviews\shamika.png"
                alt="reviewer"
              />
              <h5 className="name">Shamika Rodgers</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;