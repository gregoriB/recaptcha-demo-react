import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

function App() {
  const [isCaptchaGood, setIsCaptchaGood] = useState(true);

  const handleChange = () => {
    setIsCaptchaGood(false);
  }

  return (
    <div className="App">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder='Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea placeholder='Please add your message here' required />
        <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleChange} />
        <button type="submit" disabled={isCaptchaGood}>SEND</button>
      </form>
    </div>
  );
}

export default App;