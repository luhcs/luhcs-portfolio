import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import useTranslation from 'next-translate/useTranslation'



const Work = () => {
  let { t } = useTranslation();

return(
  <Layout title="Marcella">
    <Container>
      <Title>
        Marcella Franco <Badge>2022-</Badge>
      </Title>
      <P>
       {t("marcella:desc")}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://luhcs.github.io/cella-homepage" target="_blank">
          https://luhcs.github.io/cella-homepage <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
          <span>Three.JS, Javascript, HTML5, CSS3</span>
        </ListItem>
        </List>
        <WorkImage src="/images/works/marcella_01.jpg" alt="Marcella's Homepage" />
      <WorkImage src="/images/works/marcella_02.jpg" alt="Marcella's Homepage" />
    </Container>
  </Layout>
)
}

export default Work
