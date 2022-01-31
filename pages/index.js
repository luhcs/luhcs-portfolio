import { Container, Box, Heading, Image, useColorModeValue, List, ListItem, Button, Link, SimpleGrid, Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { BioSection, BioYear } from '../components/bio'
import Typewriter from 'typewriter-effect'
import GraphemeSplitter from "grapheme-splitter"
import { GridItem } from '../components/grid-item'
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub,
	IoLogoStackoverflow,
	IoLogoLinkedin
} from 'react-icons/io5'
import cellapreview from '../public/images/cellapreview.gif'



const Page = () => {

	let { t } = useTranslation();

	const stringSplitter = string => {
		const splitter =new GraphemeSplitter();
		return splitter.splitGraphemes(string)};

	return (
		<Layout>
			<Container>
				<Box p={4} />
				<Box
					borderRadius="lg"
					bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
					p={3}
					mb={6}
					align="center">
					<Typewriter
						options={{
							strings: [t('common:greeting'), t('common:greeting2')],
							delay: 60,
							autoStart: true,
							loop: true,
							stringSplitter,
						}}
					/>
				</Box>

				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Lucas Gomes
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
					<Paragraph>{t("common:intro")} <Link> <a href="https://luhcs.github.io/cella-homepage" target="_blank">Marcella Franco</a></Link>.</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/trabalhos">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
								{t("common:portfbutton")}
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>2000</BioYear>
						{t("common:biodesc1")}
					</BioSection>
					<BioSection>
						<BioYear>2017</BioYear>
						{t("common:biodesc2")}
					</BioSection>
					<BioSection>
						<BioYear>2020</BioYear>
						{t("common:biodesc3")}
					</BioSection>
					<BioSection>
						<BioYear>2021</BioYear>
						{t("common:biodesc4")}
					</BioSection>
					<BioSection>
						<BioYear>2021 {t("common:yearcm")}</BioYear>
						{t("common:biodesc5")}
					</BioSection>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I  ♥
					</Heading>
					<Paragraph>
						{t("common:iluv")}
					</Paragraph>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						{t("common:ontheweb")}
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/luhcs" target="_blank">
								<Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoGithub}/>}>
								@luhcs
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://linkedin.com/in/lgmssilva" target="_blank">
								<Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoLinkedin}/>}>
								@lgmssilva
								</Button>
							</Link>
							</ListItem>
							<ListItem>
							<Link href="https://instagram.com/luhcs_" target="_blank">
								<Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoInstagram}/>}>
								@luhcs_
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://stackoverflow.com/users/18048214/lucas-f-gomes" target="_blank">
								<Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoStackoverflow}/>}>
								Lucas F. Gomes
								</Button>
							</Link>
						</ListItem>
					</List>
					</Section>
					<Section delay={0.3}>
						<Heading as="h3" variant="section-title">{t('common:someprojs')}</Heading>
					<SimpleGrid columns={[1,2,2]} gap={6} >
						<GridItem href="https://luhcs.github.io/cella-homepage" title="Marcella Franco" thumbnail={cellapreview}>{t('common:hypno')}</GridItem>
					</SimpleGrid>
					</Section>
			</Container>
		</Layout>
	)
}

export default Page
