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
