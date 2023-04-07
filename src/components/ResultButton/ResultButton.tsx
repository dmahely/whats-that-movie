import { Box, Button } from '@chakra-ui/react';
import { ActorWithMovies, Movie } from '../../App';
import { findCommonMovies } from '../../utils/findCommonMovies';

type ResultButtonProps = {
    selectedActors: ActorWithMovies[]
    setCommonMovies: React.Dispatch<React.SetStateAction<Array<Movie>>>
}

const ResultButton: React.FC<ResultButtonProps> = ({ selectedActors, setCommonMovies }) => {
    const handleOnClick = () => {
        const movies = findCommonMovies(selectedActors)
        setCommonMovies(movies)
    }
    return (
        <Box>
            {selectedActors.length > 1 && <Button colorScheme="orange" onClick={handleOnClick}>Ready to find the name</Button>}
        </Box>)
}

export { ResultButton }