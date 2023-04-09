import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { ActorWithMovies, Movie } from '../../App'
import { getFullPhotoPath } from '../../utils/getFullPhotoPath'
import { moviePhotoSize } from '../../utils/photoSizes'

type ResultProps = {
    commonMovies: Movie[]
    selectedActors: ActorWithMovies[]
}

const Result: React.FC<ResultProps> = ({ commonMovies, selectedActors }) => {
    commonMovies.sort(
        (a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate)
    )

    const actorNames = selectedActors
        .map(({ actor }) => actor.name)
        .reduce(
            (a, b, i, array) =>
                a +
                (i < array.length - 1
                    ? ', '
                    : array.length > 2
                    ? ', and '
                    : ' and ') +
                b
        )

    return (
        <VStack spacing="2" display-name="results-flex">
            <Text>
                {actorNames} have {commonMovies.length} movies in common!
            </Text>
            <HStack
                flexWrap="wrap"
                justifyContent="center"
                spacing="1"
                display-name="movie-results-vstack"
            >
                {commonMovies.map((movie) => {
                    const { id, posterPath, title, releaseDate } = movie
                    return (
                        <VStack display-name="movie-vstack" key={id}>
                            <Image
                                boxSize="250px"
                                src={getFullPhotoPath(
                                    posterPath,
                                    moviePhotoSize
                                )}
                                alt={`${title} poster`}
                            />
                            <Text>
                                {title} ({releaseDate.substring(0, 4)})
                            </Text>
                        </VStack>
                    )
                })}
            </HStack>
        </VStack>
    )
}

export { Result }
