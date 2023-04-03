import { Actor } from '../../apis/fetchActors'
import React from "react"

type SuggestionsProps = {
    actors: Actor[],
    setSelectedActors: React.Dispatch<React.SetStateAction<Actor[]>>,
    selectedActors: Actor[]
}

const Suggestions: React.FC<SuggestionsProps> = ({ actors, setSelectedActors, selectedActors }) => {
    const handleOnClick = (index: number) => {
        setSelectedActors([...selectedActors, actors[index]])
    }

    return <div>
        {actors.map((actor, index) =>
            (<div><li>{actor.name}</li> <button onClick={() => handleOnClick(index)}>Select</button></div>))}
    </div>
}

export { Suggestions }