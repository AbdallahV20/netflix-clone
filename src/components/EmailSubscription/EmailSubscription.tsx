import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './EmailSubscription.css';
import InputText from '../InputText/InputText';

const GetStartedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path>
  </svg>
);

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="email-subscription">
      <p className="fw-normal">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="mt-3 w-100 d-flex justify-content-center buttons">
      <InputText
          label="Email address"
          value={email}
          setValueChange={(text) => setEmail(text)}
        />
        <ButtonComponent text="Get Started" type="button" svgIcon={<GetStartedIcon />} className="get-started-button" />
      </div>
    </div>
  );
};

export default EmailSubscription;
