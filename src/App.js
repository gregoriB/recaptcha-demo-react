import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

function App() {
  // const [isRecaptchaGood, setIsRecaptchaGood] = useState(false);
  // const recaptchaRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(recaptchaRef.current.getValue())
  }

  return (
    <div className="App">
      <form name="contact" method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
        {/* <ReCAPTCHA 
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_SITE_KEY} 
          onChange={onChange}
        /> */}
        <button type="submit">Send</button>
      </form>
      {/* <h1>{formState}</h1> */}
    </div>
  );
}

export default App;