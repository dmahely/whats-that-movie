import React from 'react'
import { fetchMovieCredits } from '../../apis/fetchMovieCredits'
import { nanoid } from 'nanoid'
import { HStack, VStack, Text, Image } from '@chakra-ui/react'
import './Suggestions.css'
import { getFullPhotoPath } from '../../utils/getFullPhotoPath'
import { actorPhotoSize } from '../../utils/photoSizes'
import { ActorWithMovies, Actor } from '../../types/types'

type SuggestionsProps = {
    actors: Actor[]
    setActors: React.Dispatch<React.SetStateAction<Actor[]>>
    setSelectedActors: React.Dispatch<React.SetStateAction<ActorWithMovies[]>>
    selectedActors: ActorWithMovies[]
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Suggestions: React.FC<SuggestionsProps> = ({
    actors,
    setActors,
    setSelectedActors,
    selectedActors,
    setInputValue,
}) => {
    const handleOnClick = async (index: number) => {
        const movies = await fetchMovieCredits(actors[index].id)
        const newSelection: ActorWithMovies = {
            id: parseInt(nanoid()),
            actor: actors[index],
            movies,
        }
        setSelectedActors([...selectedActors, newSelection])
        clearInput()
    }

    const clearInput = () => {
        setActors([])
        setInputValue('')
    }

    return (
        <VStack spacing="0" alignItems="start" w="350px">
            {actors.map((actor, index) => (
                <HStack
                    className="actor-suggestion"
                    cursor="pointer"
                    borderRadius="10px"
                    p="1"
                    w="100%"
                    h="60px"
                    onClick={() => handleOnClick(index)}
                    key={actor.id}
                >
                    <Image
                        boxSize="45px"
                        src={getFullPhotoPath(actor.photo, actorPhotoSize)}
                        alt={`${actor.name}`}
                        fallbackSrc="https://via.placeholder.com/30"
                    />
                    <Text>{actor.name}</Text>
                </HStack>
            ))}
        </VStack>
    )
}

export { Suggestions }
