import { Tag, TagLabel, TagCloseButton, Flex } from '@chakra-ui/react'
import { ActorWithMovies } from '../../types/types'

type SelectionsProps = {
    selectedActors: ActorWithMovies[]
    setSelectedActors: React.Dispatch<React.SetStateAction<ActorWithMovies[]>>
}

const Selections: React.FC<SelectionsProps> = ({
    selectedActors,
    setSelectedActors,
}) => {
    const removeSelection = (actorId: number) => {
        const index = selectedActors.findIndex((actor) => actor.id === actorId)

        const updatedSelectedActors = [...selectedActors]
        updatedSelectedActors.splice(index, 1)
        setSelectedActors(updatedSelectedActors)
    }

    return (
        <Flex flexFlow="row wrap" display-name="selections-flex" gap={1} p={1}>
            {selectedActors.map((selection) => {
                return (
                    <Tag
                        size="lg"
                        key={selection.id}
                        borderRadius="full"
                        variant="subtle"
                        colorScheme="pink"
                    >
                        <TagLabel>{selection.actor.name}</TagLabel>
                        <TagCloseButton
                            onClick={() => removeSelection(selection.id)}
                        />
                    </Tag>
                )
            })}
        </Flex>
    )
}

export { Selections }
