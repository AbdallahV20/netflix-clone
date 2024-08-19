import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './EmailSubscription.css'; 

const EmailSubscription = () => {
  return (
    <div className="email-subscription">
      <p className="fw-normal">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="mt-3 w-100 d-flex justify-content-center buttons">
        <input
          type="email"
          className="form-control email-input px-2 py-2"
          placeholder="Email address"
        />
        <ButtonComponent text="Get Started" type="button" />
      </div>
    </div>
  );
};

export default EmailSubscription;
