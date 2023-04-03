import { Actor } from '../../apis/fetchActors'
import React from "react"

type SuggestionsProps = {
    actors: Actor[]
    setActors: React.Dispatch<React.SetStateAction<Actor[]>>
    setSelectedActors: React.Dispatch<React.SetStateAction<Actor[]>>
    selectedActors: Actor[]
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Suggestions: React.FC<SuggestionsProps> = ({ actors, setActors, setSelectedActors, selectedActors, setInputValue }) => {
    const handleOnClick = (index: number) => {
        setSelectedActors([...selectedActors, actors[index]])
        setActors([])
        setInputValue('')
    }

    return <div>
        {actors.map((actor, index) =>
            (<div><li>{actor.name}</li> <button onClick={() => handleOnClick(index)}>Select</button></div>))}
    </div>
}

export { Suggestions }