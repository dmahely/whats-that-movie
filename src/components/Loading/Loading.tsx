import { Box } from '@chakra-ui/react'
import './Loading.css'

const Loading = () => {
    return (
        <Box display-name="loading-hstack">
            <span className="loading-emoji">🍿</span>
            <span className="loading-emoji">🍿</span>
            <span className="loading-emoji">🍿</span>
        </Box>
    )
}

export { Loading }
