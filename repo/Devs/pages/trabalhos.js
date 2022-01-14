import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import useTranslation from 'next-translate/useTranslation'

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
            <p>WIP</p>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
    )
}

export default Trabalhos