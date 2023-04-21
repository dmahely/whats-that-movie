import { Box, Button } from '@chakra-ui/react'
import { ActorWithMovies, AppState, Movie } from '../../types/types'
import { findCommonMovies } from '../../utils/findCommonMovies'

type ResultButtonProps = {
    selectedActors: ActorWithMovies[]
    setCommonMovies: React.Dispatch<React.SetStateAction<Array<Movie>>>
    setAppState: React.Dispatch<React.SetStateAction<AppState>>
}

const ResultButton: React.FC<ResultButtonProps> = ({
    selectedActors,
    setCommonMovies,
    setAppState,
}) => {
    const handleOnClick = () => {
        const movies = findCommonMovies(selectedActors)
        setCommonMovies(movies)
        setAppState(AppState.RESULT)
    }
    return (
        <Box>
            {selectedActors.length > 1 && (
                <Button
                    colorScheme="purple"
                    onClick={handleOnClick}
                    variant="ghost"
                >
                    Find that movie →
                </Button>
            )}
        </Box>
    )
}

export { ResultButton }
