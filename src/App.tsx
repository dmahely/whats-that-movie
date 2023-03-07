import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="h1">
        What's that movie?
      </h1>
      <div className="description">
        Have you ever blanked on the name of a movie while you were talking about it but could recite each of the cast members names? This website is built to help you with that.
      </div>
      <input name="input" />
    </div>
  );
}

export default App;
