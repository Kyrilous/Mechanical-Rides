function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            {/* LEFT: Brand + Description */}
            <div className="col-md-6 item text">
              <h3>Topline Mechanical Rides</h3>
              <p>
                Topline Mechanical Rides specializes in renting high-quality mechanical rides for events of all sizes.
                From parties and festivals to corporate events and community gatherings, we bring exciting, safe, and unforgettable
                ride experiences straight to you.
              </p>
            </div>

            {/* RIGHT: Instagram */}
            <div className="col-md-6 item social">
              <div className="footer-ig-card">
                <h5>Follow Us On Instagram</h5>
                <a
                  href="https://www.instagram.com/toplinepartyrentals/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our Instagram"
                >
                  <svg className="ig-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="17.5" cy="6.5" r="1"></circle>
                  </svg>
                </a>
                <p className="footer-ig-hint">@toplinepartyrentals</p>
              </div>
            </div>
          </div>

          <p className="copyright">
            Topline Mechanical Rides © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
