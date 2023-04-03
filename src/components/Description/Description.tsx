import { Heading, VStack, Flex, Text, Image } from '@chakra-ui/react';
import image from '../../assets/movie_night.svg'

const Description = () => {
    return (
        <VStack display-name="description-vstack" mt={3} mb={5}>
            <Flex gap={4} flexDir="column" w="100%" alignItems="center">
                <Heading className="h1">
                    What's that movie?
                </Heading>
                <Text className="description" w="50vw">
                    Have you ever blanked on the name of a movie while you were talking about it but could recite each of the cast members names? This website was built to help you with that.
                </Text>
                <Image alt="Movie night" htmlWidth="350px" className="hero-image" src={image} />
            </Flex>
        </VStack>
    );
}

export default Description;