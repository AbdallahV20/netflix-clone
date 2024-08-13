import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  return (
    <div>
      <nav className="navbar container-fluid">
        <a className="navbar-brand logo" href="#">Netflix</a>
        <div className="ml-auto">
          <button className="btn btn-outline-light mx-2">Select Language</button>
          <button className="btn btn-outline-light">Sign In</button>
        </div>
      </nav>
      <div className="background d-flex flex-column justify-content-center align-items-center">
        <div className="overlay"></div>
        <div className="content text-center">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="mt-3 w-100 d-flex justify-content-center buttons">
            <input type="email" className="form-control email-input ps-3 pe-3 pt-1 pb-1" placeholder="Email address" />
            <button className="btn btn-danger get-started-btn ms-1 ps-3 pe-3 pt-1 pb-1" type="button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
