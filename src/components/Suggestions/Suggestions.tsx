import { Actor } from '../../apis/fetchActors'
import React from "react"
import { fetchMovieCredits } from '../../apis/fetchMovieCredits'
import { ActorWithMovies } from '../../App'
import { nanoid } from 'nanoid'

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

    return <div>
        {actors.map((actor, index) =>
            (<div key={actor.id}><li>{actor.name}</li> <button onClick={() => handleOnClick(index)}>Select</button></div>))}
    </div>
}

export { Suggestions }