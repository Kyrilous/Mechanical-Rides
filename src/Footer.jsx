function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-title">Tri State Amusements</h3>
            <p className="footer-desc">
              Tri State Amusements specializes in renting high-quality mechanical rides for events of all sizes.
              From parties and festivals to corporate events and community gatherings, we bring exciting, safe,
              and unforgettable ride experiences straight to you.
            </p>
          </div>

          <div className="footer-links">
            <h5>Quick Links</h5>
            <a href="#top">Home</a>
            <a href="#rides">Rides</a>
            <a href="#inquire">Inquire</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div className="footer-logo">
             <img
                src="/assets/logo_clear.png"
                alt="Creative Amusements"
                className="about-pro-logo"
              />
          </div>


          {/* <div className="footer-social">
            <h5>Social</h5>

            <div className="footer-ig-card">
              <a
                className="ig-link"
                href="https://www.instagram.com/toplinepartyrentals/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Instagram"
              >
                <span className="ig-icon-wrap" aria-hidden="true">
                  <svg className="ig-icon" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="17.5" cy="6.5" r="1"></circle>
                  </svg>
                </span>

                <span className="ig-text">
                  <strong>@toplinepartyrentals</strong>
                  <span>Instagram</span>
                </span>
              </a>

              <p className="footer-ig-hint">
                New posts, event setups, and ride highlights.
              </p>
            </div>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            Tri State Amusements © {new Date().getFullYear()}
          </p>
          <p className="footer-made">Built for unforgettable events.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
