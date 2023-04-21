import { useState } from 'react'
import './App.css'
import { Description } from '../Description'
import { InputForm } from '../InputForm'
import { Suggestions } from '../Suggestions'
import { Selections } from '../Selections'
import { ChakraProvider, VStack, Flex, Heading } from '@chakra-ui/react'
import { ResultButton } from '../ResultButton'
import { Result } from '../Result'
import { ActorWithMovies, AppState, Movie, Actor } from '../../types/types'

const App = () => {
    const [actors, setActors] = useState<Array<Actor>>([])
    const [selectedActors, setSelectedActors] = useState<
        Array<ActorWithMovies>
    >([])
    const [inputValue, setInputValue] = useState<string>('')
    const [commonMovies, setCommonMovies] = useState<Array<Movie>>([])
    const [appState, setAppState] = useState<AppState>(AppState.INITIAL)

    return (
        <ChakraProvider>
            <Flex
                display-name="app-container-flex"
                flexDir="column"
                width="100%"
                px={1}
            >
                <VStack display-name="app-vstack" className="App" minH="100vh">
                    <Heading as="h1" m="2">
                        What's that movie?
                    </Heading>
                    {appState === AppState.INITIAL && (
                        <VStack display-name="app-initial-screen-vstack">
                            <Description />
                            <ResultButton
                                selectedActors={selectedActors}
                                setCommonMovies={setCommonMovies}
                                setAppState={setAppState}
                            />
                            <Selections
                                selectedActors={selectedActors}
                                setSelectedActors={setSelectedActors}
                            />
                            <InputForm
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                setActors={setActors}
                            />
                            <Suggestions
                                actors={actors}
                                setSelectedActors={setSelectedActors}
                                selectedActors={selectedActors}
                                setActors={setActors}
                                setInputValue={setInputValue}
                            />
                        </VStack>
                    )}
                    {appState === AppState.RESULT && (
                        <Result
                            commonMovies={commonMovies}
                            selectedActors={selectedActors}
                            setSelectedActors={setSelectedActors}
                            setAppState={setAppState}
                            setCommonMovies={setCommonMovies}
                        />
                    )}
                </VStack>
            </Flex>
        </ChakraProvider>
    )
}

export { App }
