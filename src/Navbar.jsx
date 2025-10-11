function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md navigation-clean">
      <div className="container">
        <a href="#" className="navbar-brand text-white">
          <img
            src="src\assets\logo.png"
            width="50"
            alt="logo"
          />
        </a>
        <button
          data-toggle="collapse"
          data-target="#navcol-1"
          className="navbar-toggler"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Mechanical Rides
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Customer Reviews
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Reserve
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
