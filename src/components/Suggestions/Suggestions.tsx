import { Actor } from '../../apis/fetchActors'
import React from "react"

type SuggestionsProps = {
    actors: Actor[],
    setSelectedActors: React.Dispatch<React.SetStateAction<Actor[]>>,
    selectedActors: Actor[]
}

const Suggestions: React.FC<SuggestionsProps> = ({ actors, setSelectedActors, selectedActors }) => {
    return <div>
        {actors.map((actor) =>
            (<div><li>{actor.name}</li> <button onClick={() => setSelectedActors([...selectedActors, actor])}>Select</button></div>))}
    </div>
}

export { Suggestions }