import React, { useState } from 'react';
import { Actor } from './apis/fetchActors';
import './App.css';
import { Description } from './components/Description';
import { InputForm } from './components/InputForm';
import { Suggestions } from './components/Suggestions';

const App = () => {
  const [actors, setActors] = useState<Array<Actor>>([])
  const [selectedActors, setSelectedActors] = useState<Array<Actor>>([])

  return (
    <div className="App">
      <Description />
      <InputForm setActors={setActors} />
      <Suggestions actors={actors} setSelectedActors={setSelectedActors} selectedActors={selectedActors} />
    </div>
  );
}

export default App;
