function Footer() {
    return (
    <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Lazertag</a></li>
                  <li><a href="#">Arcade</a></li>
                  <li><a href="#">Events</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Safety</a></li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>BONKERZ AMUSEMENT PARK</h3>
                <p>
                  Bonkerz is the best place for kids entertainment and development.
                  We host various games and events such as birthday parties, mini
                  golf, lazertag and much more!
                </p>
              </div>
              <div className="col item social">
                <a href="#"><i className="icon ion-social-facebook"></i></a>
                <a href="#"><i className="icon ion-social-twitter"></i></a>
                <a href="#"><i className="icon ion-social-snapchat"></i></a>
                <a href="#"><i className="icon ion-social-instagram"></i></a>
              </div>
            </div>
            <p className="copyright">Bonkerz © 2018</p>
          </div>
        </footer>
      </div>
    );
}
export default Footer;