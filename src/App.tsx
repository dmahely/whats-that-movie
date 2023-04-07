import React, { useState } from 'react';
import { Actor } from './apis/fetchActors';
import './App.css';
import { Description } from './components/Description';
import { InputForm } from './components/InputForm';
import { Suggestions } from './components/Suggestions';
import { Selections } from './components/Selections';
import { ChakraProvider, VStack, Center, Flex } from '@chakra-ui/react'
import { Footer } from './components/Footer';
import { ResultButton } from './components/ResultButton/ResultButton';

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
  const [commonMovies, setCommonMovies] = useState<Array<Movie>>([])

  return (
    <ChakraProvider>
      <Flex display-name="app-container-flex" flexDir="column" w="100%">
        <VStack display-name="app-vstack" className="App" minH="100vh">
          <Description />
          <ResultButton selectedActors={selectedActors} setCommonMovies={setCommonMovies} />
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
