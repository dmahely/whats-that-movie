import { Flex, Text } from '@chakra-ui/react'
import { Movie } from '../../App'

type ResultProps = {
    commonMovies: Movie[]
}

const Result: React.FC<ResultProps> = ({ commonMovies }) => {
    const latestMovie = commonMovies.sort(
        (a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate)
    )[0]
    const latestMovieYear = latestMovie.releaseDate.substring(0, 4)

    return (
        <Flex display-name="results-flex">
            <Text>
                The selected actors have {commonMovies.length} movies in common!
                Their latest movie together was {latestMovie.title} which came
                out in {latestMovieYear}
            </Text>
        </Flex>
    )
}

export { Result }
