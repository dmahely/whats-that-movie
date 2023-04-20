import { Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { ActorWithMovies, Movie, AppState } from '../../types/types'
import { getFullPhotoPath } from '../../utils/getFullPhotoPath'
import { moviePhotoSize } from '../../utils/photoSizes'
import { ResetButton } from '../ResetButton/ResetButton'

type ResultProps = {
    commonMovies: Movie[]
    selectedActors: ActorWithMovies[]
    setCommonMovies: React.Dispatch<React.SetStateAction<Array<Movie>>>
    setAppState: React.Dispatch<React.SetStateAction<AppState>>
    setSelectedActors: React.Dispatch<
        React.SetStateAction<Array<ActorWithMovies>>
    >
}

const Result: React.FC<ResultProps> = ({
    commonMovies,
    selectedActors,
    setCommonMovies,
    setAppState,
    setSelectedActors,
}) => {
    commonMovies.sort(
        (a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate)
    )

    const actorNames = selectedActors
        .map(({ actor }) => actor.name)
        .reduce(
            (firstActor, secondActor, i, array) =>
                firstActor +
                (i < array.length - 1 ? ', ' : ' and ') +
                secondActor
        )

    const movies = commonMovies.length === 1 ? 'movie' : 'movies'

    return (
        <VStack spacing="2" display-name="results-flex">
            <Text>
                {actorNames} have {commonMovies.length} {movies} in common!
            </Text>
            <SimpleGrid
                columns={3}
                spacing={2}
                display-name="movie-results-grid"
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
                                fallbackSrc="https://via.placeholder.com/250"
                            />
                            <Text>
                                {title} ({releaseDate.substring(0, 4)})
                            </Text>
                        </VStack>
                    )
                })}
            </SimpleGrid>
            <ResetButton
                setAppState={setAppState}
                setCommonMovies={setCommonMovies}
                setSelectedActors={setSelectedActors}
            />
        </VStack>
    )
}

export { Result }
