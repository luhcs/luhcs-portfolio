import { Container, Heading, SimpleGrid, Badge, Box, Button, Divider } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import useTranslation from 'next-translate/useTranslation'
import toruspopuppreview from '../public/images/toruspopuppreview.jpg'



const Publicacoes = () => {

  let { t } = useTranslation();

    return (
  <Layout title="Posts">
    <Container paddingTop={6}>
      <Heading as="h3" fontSize={20} mb={4}>
      {t('common:poststitle')}   <Badge>{t('common:new')}</Badge> 
      </Heading>
      
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title={t('common:posttitle01')}
            thumbnail={toruspopuppreview}
            href="https://luhcs.github.io/toruspopup"
          />
          </SimpleGrid>
    </Section>    
    <Box my={6} align="center">
      <Divider my={6} />
                <NextLink href="/">
                    <Button colorScheme="purple">{t("common:rhome")}</Button>
                </NextLink>
            </Box>
    </Container>
  </Layout>
    )
    }

export default Publicacoes
//export { getServerSideProps } from '../components/chakra'