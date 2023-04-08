import React, { useState } from 'react';
import { Actor } from './apis/fetchActors';
import './App.css';
import { Description } from './components/Description';
import { InputForm } from './components/InputForm';
import { Suggestions } from './components/Suggestions';
import { Selections } from './components/Selections';
import { ChakraProvider, VStack, Center, Flex, Heading } from '@chakra-ui/react'
import { Footer } from './components/Footer';
import { ResultButton } from './components/ResultButton';
import { Result } from './components/Result';

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

export enum AppState {
  INITIAL,
  RESULT
}

const App = () => {
  const [actors, setActors] = useState<Array<Actor>>([])
  const [selectedActors, setSelectedActors] = useState<Array<ActorWithMovies>>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [commonMovies, setCommonMovies] = useState<Array<Movie>>([])
  const [appState, setAppState] = useState<AppState>(AppState.INITIAL)

  return (
    <ChakraProvider>
      <Flex display-name="app-container-flex" flexDir="column" w="100%">
        <VStack display-name="app-vstack" className="App" minH="100vh">
          <Heading as="h1" m="2">What's that movie?</Heading>
          {appState === AppState.INITIAL &&
            <VStack display-name="app-initial-screen-vstack">
              <Description />
              <ResultButton selectedActors={selectedActors} setCommonMovies={setCommonMovies} setAppState={setAppState} />
              <Selections selectedActors={selectedActors} setSelectedActors={setSelectedActors} />
              <InputForm inputValue={inputValue} setInputValue={setInputValue} setActors={setActors} />
              <Suggestions actors={actors} setSelectedActors={setSelectedActors} selectedActors={selectedActors} setActors={setActors} setInputValue={setInputValue} />
            </VStack>
          }
          {appState === AppState.RESULT &&
            commonMovies.length && <Result commonMovies={commonMovies} />}
        </VStack>
        <Center display-name="footer-container">
          <Footer />
        </Center>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
