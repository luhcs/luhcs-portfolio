import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

const NotFound = () => {

    let { t } = useTranslation();

    return (
        <Container>
            <Heading as="h1">Oops..</Heading>
            <Text>{t("common:notfound")}</Text>
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