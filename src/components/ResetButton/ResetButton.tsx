import { Box, Button } from '@chakra-ui/react'
import { ActorWithMovies, AppState, Movie } from '../../types/types'

type ResetButtonProps = {
    setCommonMovies: React.Dispatch<React.SetStateAction<Array<Movie>>>
    setAppState: React.Dispatch<React.SetStateAction<AppState>>
    setSelectedActors: React.Dispatch<
        React.SetStateAction<Array<ActorWithMovies>>
    >
}

const ResetButton: React.FC<ResetButtonProps> = ({
    setCommonMovies,
    setAppState,
    setSelectedActors,
}) => {
    const handleOnClick = () => {
        setCommonMovies([])
        setAppState(AppState.INITIAL)
        setSelectedActors([])
    }
    return (
        <Box>
            <Button
                colorScheme="purple"
                onClick={handleOnClick}
                variant="ghost"
            >
                Try again ↺
            </Button>
        </Box>
    )
}

export { ResetButton }
