import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

function App() {
  return (
    <div className="App">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
        <ReCAPTCHA 
          sitekey={process.env.REACT_APP_SITE_KEY} 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;