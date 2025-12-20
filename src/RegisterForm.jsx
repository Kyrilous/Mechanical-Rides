
function RegisterForm() {
  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
          <h2 className="text-center">
            <strong>Contact Us!</strong>
          </h2>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="date"
              placeholder="Event Date"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;    
