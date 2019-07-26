import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

function App() {
  const [recaptchaMessage, setRecaptchaMessage] = useState('');
  const handleOnChange = () => setRecaptchaMessage('recaptcha worked!!');

  return (
    <div className="App">
      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleOnChange} />
      <h1>{recaptchaMessage}</h1>
    </div>
  );
}

export default App;