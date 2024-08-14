import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import logo from '../../assets/images/netflix-logo.svg';
import '../../components/MiddleSection/MiddleSection';
import MiddleSection from '../../components/MiddleSection/MiddleSection';
const LandingPage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="row w-100 justify-content-center align-items-center py-4">
            <div className="col-4">
              <a className="navbar-brand logo" href="#">
                <img src={logo} alt="Netflix Logo" className="logo-img" />
              </a>
            </div>
            <div className="col-4 text-end">
              <ButtonComponent type="select" />
              <ButtonComponent text="Sign In" type="button" />
            </div>
          </div>
        </div>
      </nav>
      <div className="background d-flex flex-column justify-content-center align-items-center">
        <div className="overlay"></div>
        <div className="content text-center">
          <h1 className="py-3 fw-bold">Unlimited movies, TV shows, and more</h1>
          <p className="py-4 fw-normal">Watch anywhere. Cancel anytime.</p>
          <p className="fw-normal">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="mt-3 w-100 d-flex justify-content-center buttons">
            <input type="email" className="form-control email-input px-2 py-2" placeholder="Email address"/>
            <ButtonComponent text="Get Started" type="button" />
          </div>
        </div>
      </div>
      
      <section>
          <MiddleSection title='Enjoy on your TV' 
                         subtitle='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
                         image='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
                         video='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                         textLeft={true}/>
      </section>
      <section>
          <MiddleSection title='Download your shows to watch offline' 
                            subtitle='Save your favorites easily and always have something to watch.'
                            image='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                            video=''
                            textLeft={false}/>
      </section>
      <section>
          <MiddleSection title='Watch everywhere' 
                            subtitle='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
                            image='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
                            video='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
                            textLeft={true}/>
      </section>
      <section>
          <MiddleSection title='Create profiles for kids' 
                            subtitle='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
                            image='https://occ-0-3311-2706.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55'
                            video=''
                            textLeft={false}/>
      </section>
    </div>
  );
}

export default LandingPage;
