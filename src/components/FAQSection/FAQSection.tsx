import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './FAQSection.css';
import EmailSubscription from '../EmailSubscription/EmailSubscription';

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button ${openId === 'collapseOne' ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleClick('collapseOne')}
              >
                What is Netflix?
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse ${openId === 'collapseOne' ? 'show' : ''}`}
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button ${openId === 'collapseTwo' ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleClick('collapseTwo')}
              >
                How much does Netflix cost?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${openId === 'collapseTwo' ? 'show' : ''}`}
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP 70 to EGP 165 a month. No extra costs, no contracts.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button ${openId === 'collapseThree' ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleClick('collapseThree')}
              >
                Where can I watch?
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse ${openId === 'collapseThree' ? 'show' : ''}`}
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className={`accordion-button ${openId === 'collapseFour' ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleClick('collapseFour')}
              >
                How do I cancel?
              </button>
            </h2>
            <div
              id="collapseFour"
              className={`accordion-collapse collapse ${openId === 'collapseFour' ? 'show' : ''}`}
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className={`accordion-button ${openId === 'collapseFive' ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleClick('collapseFive')}
              >
                What can I watch on Netflix?
              </button>
            </h2>
            <div
              id="collapseFive"
              className={`accordion-collapse collapse ${openId === 'collapseFive' ? 'show' : ''}`}
              aria-labelledby="headingFive"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className={`accordion-button ${openId === 'collapseSix' ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleClick('collapseSix')}
              >
                Is Netflix good for kids?
              </button>
            </h2>
            <div
              id="collapseSix"
              className={`accordion-collapse collapse ${openId === 'collapseSix' ? 'show' : ''}`}
              aria-labelledby="headingSix"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
              </div>
            </div>
          </div>
        </div>
        <EmailSubscription />
      </div>
    </div>
  );
};

export default FAQSection;
