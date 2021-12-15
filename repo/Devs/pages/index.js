import { Container, Box, Heading, Image, useColorModeValue, Button, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
const Page = () => {
	return (
		<Container>
			<Box 
			borderRadius="lg" 
			bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
			p={3} 
			mb={6} 
			align="center">
				Olá, seja bem vindo ao meu portfolio! :)
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Lucas F. Gomes
					</Heading>
					<p>Aprendiz de programação (Estudante de Analise e Desenvolvimento de Sistemas / Economia)</p>
				</Box>
				<Box flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align="center"
				>
					<Image
						borderColor="whiteAlpha.800"
						borderWidth={2}
						borderStyle="solid"
						maxWidth="100px"
						display="inline-block"
						borderRadius="full"
						src="/images/lucas.jpg"
						alt="Imagem de Perfil"
					/>
				</Box>
			</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Sobre
				</Heading>
				<Paragraph>Lucas é um iniciante e apaixonado pelo universo da programação, e que pretende viver dela. Atualmente ele trabalha como Assistente de Cadastro, mas busca uma transição de carreira imediatamente!</Paragraph>
			<Box align="center" my={4}>
				<NextLink href="/trabalhos">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="gray">
						Meu portfolio
					</Button>
				</NextLink>
			</Box>
			</Section>
		</Container>
	)
}

export default Page
