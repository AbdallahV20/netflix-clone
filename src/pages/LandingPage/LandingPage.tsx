import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/MiddleSection/MiddleSection';
import MiddleSection from '../../components/MiddleSection/MiddleSection';

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
