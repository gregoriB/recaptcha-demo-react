import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

function App() {
  const handleOnChange = () => {
    console.log('recaptcha worked!!')
  }
  return (
    <div className="App">
    <ReCAPTCHA
      sitekey={process.env.REACT_APP_SITE_KEY}
      onChange={handleOnChange}
    />,
    </div>
  );
}

export default App;
