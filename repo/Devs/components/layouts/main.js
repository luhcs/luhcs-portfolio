import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import dynamic from 'next/dynamic'
import DeloreanLoader from '../delorean-loader'

const LazyDelorean = dynamic(() => import('../delorean'), {
    ssr: false,
    loading: () => <DeloreanLoader />
  })

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name= "viewport" content="width=device-width, initial-scale=1" />
                <title>Lucas Gomes - Homepage</title> 
                <link rel="shotcut icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>

            <Navbar path={router.asPath}/>
            

            <Container maxW="container.md" pt={14}>
                               {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main