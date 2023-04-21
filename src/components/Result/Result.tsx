import { Image, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
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

    const movies = commonMovies.length > 1 ? 'movies' : 'movie'

    return (
        <VStack spacing={2} display-name="results-vstack" pb={3}>
            <Text>
                {actorNames} have starred in {commonMovies.length} {movies}{' '}
                together according to{' '}
                <Link
                    href="https://www.themoviedb.org"
                    isExternal
                    fontWeight="bold"
                >
                    TMDB
                </Link>
                .
            </Text>
            <ResetButton
                setAppState={setAppState}
                setCommonMovies={setCommonMovies}
                setSelectedActors={setSelectedActors}
            />
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
                                borderRadius="10px"
                            />
                            <Text maxW={235}>
                                {title} (
                                {releaseDate
                                    ? releaseDate.substring(0, 4)
                                    : 'Unknown'}
                                )
                            </Text>
                        </VStack>
                    )
                })}
            </SimpleGrid>
        </VStack>
    )
}

export { Result }
