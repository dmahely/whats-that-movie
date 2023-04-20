import { VStack, Flex, Text, Image, Highlight } from '@chakra-ui/react'
import image from '../../assets/movie_night.svg'

const Description = () => {
    return (
        <VStack display-name="description-vstack" mb={3}>
            <Flex gap={4} flexDir="column" w="100%" alignItems="center">
                <Image
                    alt="Movie night"
                    boxSize="150px"
                    className="hero-image"
                    src={image}
                />
                <Text className="description" w="50vw">
                    <Highlight
                        query="all the actors"
                        styles={{
                            px: '1',
                            py: '1',
                            rounded: 'full',
                            bg: 'purple.100',
                            fontWeight: 'bold',
                        }}
                    >
                        Have you ever blanked on the name of a movie while you
                        were talking about it but could recite all the actors in
                        it? This website was built to help you with that.
                    </Highlight>
                </Text>
            </Flex>
        </VStack>
    )
}

export default Description
