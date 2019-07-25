import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>TESTING</div>
      {process.env.REACT_APP_TEST_VAR}
    </div>
  );
}

export default App;
