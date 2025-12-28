function Testimonials() {
  const reviews = [
    {
      name: "Gilda Capellan",
      img: "/assets/reviews/Gilda_Review.png",
      text:
        "My school had a pep rally today and Creative Amusements outdid themselves. Our students had a blast, staff, and parent volunteers. They worked with us on our budget and we’re on time, friendly, and really wanted the kids to have a good time. Can't wait for our next event! Thank you!",
    },
    {
      name: "Maggie Somerville",
      img: "/assets/reviews/Maggie_Review.png",
      text:
        "Amazing, reliable, and affordable company. I’ve rented tents, tables and chairs for a party over 70 in my back yard and they did not disappoint. I even rented a heater for inside the tent. They are very reliable and set up and took down everything. Highly recommend!",
    },
    {
      name: "Shamika Rodgers",
      img: "/assets/reviews/shamika.png",
      text:
        "I've used Creative Amusements several times over the last couple of years for my corporate events. They are truly the best with the best equipment, rentals, staff and prices. I look forward to our next event with them.",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-wrap">
        <div className="reviews-head reveal">
          <h2 className="reviews-title">Customer Reviews</h2>
          <p className="reviews-subtitle">
            Real feedback from real events — reliability, quality, and a great time.
          </p>
        </div>

        <div className="reviews-grid reveal-stagger">
          {reviews.map((r) => (
            <article className="review-card" key={r.name}>
              <div className="review-top">
                <div className="stars" aria-label="5 star review">
                  ★★★★★
                </div>
              </div>

              <p className="review-text">“{r.text}”</p>

              <div className="review-author">
                <img className="review-avatar" src={r.img} alt={r.name} />
                <div>
                  <h5 className="review-name">{r.name}</h5>
                  <p className="review-meta">Verified customer</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
