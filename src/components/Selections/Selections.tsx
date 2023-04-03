import { Actor } from '../../apis/fetchActors'

type SelectionsProps = {
    selectedActors: Actor[]
}

const Selections: React.FC<SelectionsProps> = ({ selectedActors }) => {
    return <div>
        {selectedActors.map((actor) => {
            return <ol>{actor.name}</ol>
        })}
    </div>
}

export { Selections }