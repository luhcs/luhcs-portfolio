import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import useTranslation from 'next-translate/useTranslation'



const Work = () => {
  let { t } = useTranslation();

return(
  <Layout title="toruspopup">
    <Container>
      <Title>
        TorusKnot + Pop-up <Badge>2022 - </Badge>
      </Title>
      <P>
       {t("torusint:desc")}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://luhcs.github.io/toruspopup/" target="_blank">
          https://luhcs.github.io/toruspopup/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
          <span>Three.JS, Javascript, WEBGL, HTML5, CSS3</span>
        </ListItem>
        </List>
        <WorkImage src="/images/works/toruspopup_01.png" alt="TorusKnot" />
      <WorkImage src="/images/works/toruspopup_02.png" alt="Selected TorusKnot" />
    </Container>
  </Layout>
)
}

export default Work
//export { getServerSideProps } from '../../components/chakra'