import "./SignIn.css";
import NetflixLogo from '../../assets/images/netflix-logo.svg'
const SignIn = () => {
  return (
    <section className="signin-section d-flex justify-content-center vh-100">
      <div className="container">
        <img
          src={NetflixLogo}
          alt="logo"
          title="netflix"
          width={150}
          className="py-4"
        />
        <div className="row">
          <div className="col-8">
            <div className="signin-form">
              <h1>Sign In</h1>
              <form>
                <input type="text" className="form-control" />
                <input type="text" className="form-control" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
