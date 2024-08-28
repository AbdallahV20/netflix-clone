import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import logo from "../../assets/images/netflix-logo.svg";
import "../../components/MiddleSection/MiddleSection";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
import CurveSection from "../../components/CurveSection/CurveSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import NetflixLogo from "../../components/NetflixLogo/NetflixLogo";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import TrendingSection from "../../components/TrendingSection/TrendingSection";
const LandingPage = () => {
  return (
    <div>
<section className="navbar">
  <nav className="container-fluid">
    <div className="row w-100 justify-content-center align-items-center py-4">
      <div className="col-6">
        <a className="navbar-brand logo" href="#">
          <NetflixLogo/>
        </a>
      </div>
      <div className="col-4 text-end">
        <ButtonComponent type="select" />
        <NavLink to="/signin">
          <ButtonComponent text="Sign In" type="button" className="btn-signin" />
        </NavLink>
      </div>
    </div>
  </nav>
</section>
<section className="background d-flex flex-column justify-content-center align-items-center">
  <div className="overlay"></div>
  <div className="content text-center">
    <h1 className="header fw-bold">Unlimited movies,<br /> TV shows, and more</h1>
    <p className="pb-4 fw-normal">Starts at EGP 70. Cancel anytime.</p>
    <EmailSubscription />
  </div>
  <CurveSection />
</section>


      <section>
        <TrendingSection />
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
