import React, { useState } from 'react';
import { Actor } from './apis/fetchActors';
import './App.css';
import { Description } from './components/Description';
import { InputForm } from './components/InputForm';
import { Suggestions } from './components/Suggestions';
import { Selections } from './components/Selections';
import { ChakraProvider, VStack, Center, Flex } from '@chakra-ui/react'
import { Footer } from './components/Footer';

export type Movie = {
  id: string
  posterPath: string
  title: string
  releaseDate: string
}

export type ActorWithMovies = {
  id: string
  actor: Actor
  movies: Movie[]
}

const App = () => {
  const [actors, setActors] = useState<Array<Actor>>([])
  const [selectedActors, setSelectedActors] = useState<Array<ActorWithMovies>>([])
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <ChakraProvider>
      <Flex display-name="app-container-flex" flexDir="column" w="100%">
        <VStack display-name="app-vstack" className="App" minH="100vh">
          <Description />
          {selectedActors.length > 1 && <button>Find out the movie name!</button>}
          <Selections selectedActors={selectedActors} setSelectedActors={setSelectedActors} />
          <InputForm inputValue={inputValue} setInputValue={setInputValue} setActors={setActors} />
          <Suggestions actors={actors} setSelectedActors={setSelectedActors} selectedActors={selectedActors} setActors={setActors} setInputValue={setInputValue} />
        </VStack>
        <Center display-name="footer-container">
          <Footer />
        </Center>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
