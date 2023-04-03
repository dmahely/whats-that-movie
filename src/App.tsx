import React, { useState } from 'react';
import { Actor } from './apis/fetchActors';
import './App.css';
import { Description } from './components/Description';
import { InputForm } from './components/InputForm';
import { Suggestions } from './components/Suggestions';
import { Selections } from './components/Selections';
import { ChakraProvider, VStack } from '@chakra-ui/react'

const App = () => {
  const [actors, setActors] = useState<Array<Actor>>([])
  const [selectedActors, setSelectedActors] = useState<Array<Actor>>([])

  return (
    <ChakraProvider>
      <VStack display-name="app-vstack" className="App">
        <Description />
        {selectedActors.length > 1 && <button>Find out the movie name!</button>}
        <Selections selectedActors={selectedActors} />
        <InputForm setActors={setActors} />
        <Suggestions actors={actors} setSelectedActors={setSelectedActors} selectedActors={selectedActors} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
