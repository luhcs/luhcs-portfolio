import { Container, Heading, SimpleGrid, Button, Box, Divider} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import useTranslation from 'next-translate/useTranslation'
import cellapreview from '../public/images/cellapreview.jpg'

const Trabalhos = () => {

    let { t } = useTranslation();
    return(

  <Layout title="Trabalhos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
       {t("trabalhos:title")}
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
            <WorkGridItem id="marcella" title="Marcella's Homepage" thumbnail={cellapreview}> {t('marcella:desc')} </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Box my={6} align="center">
      <Divider my={6} />
                <NextLink href="/">
                    <Button colorScheme="purple">{t("common:rhome")}</Button>
                </NextLink>
            </Box>
    </Container>
  </Layout>
    )
};

export default Trabalhos
//export { getServerSideProps } from '../components/chakra'