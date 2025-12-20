function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md navigation-clean">
      <div className="container">
        
        {/* Logo */}
        <a href="#about" className="navbar-brand">
          <img
            className="nav-logo"
            src="assets\logo.png"
            width="50"
            alt="Topline Mechanical Rides Logo"
          />
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-1"
          aria-controls="navcol-1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a href="#gallery" className="nav-link">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a href="#inquire" className="nav-link">
                Inquire
              </a>
            </li>

            <li className="nav-item">
              <a href="#reviews" className="nav-link">
                Customer Reviews
              </a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

