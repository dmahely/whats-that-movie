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
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <ChakraProvider>
      <VStack display-name="app-vstack" className="App">
        <Description />
        {selectedActors.length > 1 && <button>Find out the movie name!</button>}
        <Selections selectedActors={selectedActors} setSelectedActors={setSelectedActors} />
        <InputForm inputValue={inputValue} setInputValue={setInputValue} setActors={setActors} />
        <Suggestions actors={actors} setSelectedActors={setSelectedActors} selectedActors={selectedActors} setActors={setActors} setInputValue={setInputValue} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
