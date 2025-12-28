import { useEffect } from "react";

function Navbar() {

  useEffect(() => {
    const nav = document.getElementById("main-navbar");

    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-glass" id="main-navbar">
      <div className="container">
        
        <a href="#about" className="navbar-brand">
          <img
            className="nav-logo"
            src="assets/logo.png"
            width="50"
            alt="Topline Mechanical Rides Logo"
          />
        </a>

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

        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mx-auto">
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
