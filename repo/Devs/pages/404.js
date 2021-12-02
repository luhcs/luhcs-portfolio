import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Oops..</Heading>
            <Text>A página que você procura não foi encontrada.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="gray">Voltar</Button>
                </NextLink>
            </Box>
        </Container>  
    )
}

export default NotFound