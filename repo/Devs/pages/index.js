import { Container, Box, Heading, Image, useColorModeValue, Button, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'
const Page = () => {

	let { t } = useTranslation();

	return (
		<Layout>
		<Container>
			<Box p={4}/>
			<Box 
			borderRadius="lg" 
			bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
			p={3} 
			mb={6} 
			align="center">
				{t("common:greeting")}
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Lucas F. Gomes
					</Heading>
					<p>{t("common:profile")}</p>
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
					{t("common:about")}
				</Heading>
				<Paragraph>{t("common:intro")}</Paragraph>
			<Box align="center" my={4}>
				<NextLink href="/trabalhos">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="gray">
						{t("common:portfbutton")}
					</Button>
				</NextLink>
			</Box>
			</Section>
		</Container>
		</Layout>
	)
}

export default Page
