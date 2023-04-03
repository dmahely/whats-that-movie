import { Link, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Text position="absolute" bottom="0">Made by <Link href="https://github.com/dmahely" isExternal fontWeight="bold">Doaa Mahely</Link></Text>
    )
}

export { Footer }