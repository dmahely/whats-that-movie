import React from 'react';
import './App.css';
import { Description } from './components/Description';
import { InputForm } from './components/InputForm';

const App = () => {
  return (
    <div className="App">
      <Description />
      <InputForm />
    </div>
  );
}

export default App;
