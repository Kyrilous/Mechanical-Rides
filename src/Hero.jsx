export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-kicker">Topline Mechanical Rides</p>

        <h1 className="hero-title">
          Premium Mechanical Ride Rentals for{" "}
          <span className="hero-grad">Unforgettable Events</span>
        </h1>

        <p className="hero-subtitle">
          Mechanical bulls, surf simulators, and crowd-favorite attractions —
          delivered, operated, and set up for your event.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#inquire">
            Book an Event
          </a>
          <a className="btn btn-secondary" href="#rides">
            View Rides
          </a>
        </div>

        <div className="hero-badges">
          <span className="badge">Fully Staffed</span>
          <span className="badge">Setup Included</span>
          <span className="badge">NYC / Tri-State</span>
        </div>
      </div>
    </section>
  );
}
