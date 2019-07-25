import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {process.env.TEST_VAR}
    </div>
  );
}

export default App;
