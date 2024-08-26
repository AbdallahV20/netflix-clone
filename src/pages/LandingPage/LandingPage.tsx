import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import logo from "../../assets/images/netflix-logo.svg";
import "../../components/MiddleSection/MiddleSection";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
import CurveSection from "../../components/CurveSection/CurveSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <section className="navbar">
        <nav className="container-fluid">
          <div className="row w-100 justify-content-center align-items-center py-4">
            <div className="col-4">
              <a className="navbar-brand logo" href="#">
                <img src={logo} alt="Netflix Logo" className="logo-img" />
              </a>
            </div>
            <div className="col-4 text-end">
              <ButtonComponent type="select" />
              <NavLink to="/signin">
                <ButtonComponent text="Sign In" type="button" />
              </NavLink>
            </div>
          </div>
        </nav>
      </section>
      <section className="background d-flex flex-column justify-content-center align-items-center">
        <div className="overlay"></div>
        <div className="content text-center">
          <h1 className="py-3 fw-bold">Unlimited movies, TV shows, and more</h1>
          <p className="py-4 fw-normal">Watch anywhere. Cancel anytime.</p>
          <EmailSubscription />
        </div>
        <CurveSection />
      </section>

    

      <section>
        <FAQSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
