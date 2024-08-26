import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import logo from "../../assets/images/netflix-logo.svg";
import "../../components/MiddleSection/MiddleSection";
import MiddleSection from "../../components/MiddleSection/MiddleSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import NetflixLogo from "../../components/NetflixLogo/NetflixLogo";
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
                <NetflixLogo/>
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
      </section>
      <section>
        <MiddleSection
          title="Enjoy on your TV"
          subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          textLeft={true}
        />
      </section>
      <section>
        <MiddleSection
          title="Download your shows to watch offline"
          subtitle="Save your favorites easily and always have something to watch."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          video=""
          textLeft={false}
        />
      </section>
      <section>
        <MiddleSection
          title="Watch everywhere"
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          textLeft={true}
        />
      </section>
      <section>
        <MiddleSection
          title="Create profiles for kids"
          subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          image="https://occ-0-3311-2706.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          video=""
          textLeft={false}
        />
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
