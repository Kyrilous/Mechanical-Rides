export default function About() {
  return (
    <section className="about-pro" id="about">
      <div className="about-pro-wrap reveal">
        <div className="about-pro-card">
          <div className="about-pro-left">
            <h2 className="about-pro-title">About Creative Amusements</h2>

            <p className="about-pro-text">
              Based in Long Island and serving the Tri-State area, Creative Amusements provides
              high-quality mechanical rides for events of all sizes. Our focus is simple:
              clean presentation, professional operation, and unforgettable experiences.
            </p>

            <div className="about-pro-features">
              <div className="about-pro-feature">
                <span className="about-pro-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
                    <path d="M9.5 12.5l1.8 1.8L15.8 9.8" />
                  </svg>
                </span>
                <div>
                  <h4>Safety-first operation</h4>
                  <p>Professionally maintained and supervised rides.</p>
                </div>
              </div>

              <div className="about-pro-feature">
                <span className="about-pro-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 3h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2-3-2V5a2 2 0 0 1 2-2z" />
                    <path d="M7 11h10M7 15h6" />
                  </svg>
                </span>
                <div>
                  <h4>Clean event presentation</h4>
                  <p>Setups that look great in photos and videos.</p>
                </div>
              </div>

              <div className="about-pro-feature">
                <span className="about-pro-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 12h3l3-7 4 14 3-7h5" />
                  </svg>
                </span>
                <div>
                  <h4>Energy for any crowd</h4>
                  <p>From family-friendly fun to thrill rides.</p>
                </div>
              </div>
            </div>

            <div className="about-pro-actions">
              <a className="about-pro-btn" href="#inquire">Book an Event</a>
              <a className="about-pro-link" href="#rides">View rides →</a>
            </div>
          </div>
          <div className="about-pro-right">
            <div className="about-pro-brand">
              <div className="brand-line" />

              <img
                src="/assets/logo.png"
                alt="Creative Amusements"
                className="about-pro-logo"
              />

              <p className="about-pro-tagline">
                Premium mechanical rides for unforgettable events.
              </p>

              <div className="about-pro-mini-row">
                <div className="about-pro-mini">
                  <span className="mini-dot" />
                  <div>
                    <strong>Tri-State Service</strong>
                    <span>Long Island • NYC • NJ • CT</span>
                  </div>
                </div>

                <div className="about-pro-mini">
                  <span className="mini-dot" />
                  <div>
                    <strong>Professional Setup</strong>
                    <span>On-time • Clean • Reliable</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-pro-glow" />
          </div>

        </div>
      </div>
    </section>
  );
}
