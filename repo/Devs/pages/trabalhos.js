import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
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
            <WorkGridItem id="marcella" title="Marcella's Homepage" thumbnail={cellapreview}>Pagina comercial criativa e responsiva utilizando Three.JS e Vite. Estou estudando e desenvolvendo um sistema de gestão personalizado. </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
    )
}

export default Trabalhos