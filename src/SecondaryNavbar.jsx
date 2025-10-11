function secondaryNavbar() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-md bg-dark"
      style={{ marginBottom: "0px", fontSize: "18px" }}
    >
      <div className="container-fluid">
        <button
          data-toggle="collapse"
          data-target="#navcol-2"
          className="navbar-toggler"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-2">
          <ul
            className="nav navbar-nav ml-auto"
            style={{ backgroundColor: "transparent" }}
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Attractions
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Hours/Prices
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Parties
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Field Trips
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Directions
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default secondaryNavbar;
