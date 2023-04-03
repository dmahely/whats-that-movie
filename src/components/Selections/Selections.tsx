import { Actor } from '../../apis/fetchActors'
import {
    Tag,
    TagLabel,
    TagCloseButton,
    Flex
} from '@chakra-ui/react'

type SelectionsProps = {
    selectedActors: Actor[]
    setSelectedActors: React.Dispatch<React.SetStateAction<Actor[]>>
}

const Selections: React.FC<SelectionsProps> = ({ selectedActors, setSelectedActors }) => {
    const removeSelection = (actorId: string) => {
        const index = selectedActors.findIndex((actor) => actor.id === actorId)

        const updatedSelectedActors = [...selectedActors]
        updatedSelectedActors.splice(index, 1)
        setSelectedActors(updatedSelectedActors)
    }

    return <Flex display-name="selections-flex" gap={1}>
        {selectedActors.map((actor) => {
            return <Tag
                size='lg'
                key='lg'
                borderRadius='full'
                variant='solid'
                colorScheme='blue'
            >
                <TagLabel>{actor.name}</TagLabel>
                <TagCloseButton onClick={() => removeSelection(actor.id)} />
            </Tag>
        })}
    </Flex>
}

export { Selections }