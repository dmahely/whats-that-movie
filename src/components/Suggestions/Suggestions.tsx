import { Actor } from '../../apis/fetchActors'
import React from "react"
import { fetchMovieCredits } from '../../apis/fetchMovieCredits'
import { ActorWithMovies } from '../../App'
import { nanoid } from 'nanoid'
import { HStack, VStack, Text, Image } from '@chakra-ui/react'
import './Suggestions.css'

type SuggestionsProps = {
    actors: Actor[]
    setActors: React.Dispatch<React.SetStateAction<Actor[]>>
    setSelectedActors: React.Dispatch<React.SetStateAction<ActorWithMovies[]>>
    selectedActors: ActorWithMovies[]
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Suggestions: React.FC<SuggestionsProps> = ({ actors, setActors, setSelectedActors, selectedActors, setInputValue }) => {
    const handleOnClick = async (index: number) => {
        const movies = await fetchMovieCredits(actors[index].id)
        const newSelection: ActorWithMovies = { id: nanoid(), actor: actors[index], movies }
        setSelectedActors([...selectedActors, newSelection])
        clearInput()
    }

    const clearInput = () => {
        setActors([])
        setInputValue('')
    }

    return <VStack spacing="0" alignItems="start" w="250px">
        {actors.map((actor, index) =>
        (<HStack className="actor-suggestion" cursor="pointer" borderRadius="10px" p="2" w="100%" onClick={() => handleOnClick(index)} key={actor.id}>
            <Image boxSize="25px" src="https://via.placeholder.com/25" fallbackSrc="https://via.placeholder.com/25" />
            <Text>{actor.name}</Text>
        </HStack>))}
    </VStack>
}

export { Suggestions }