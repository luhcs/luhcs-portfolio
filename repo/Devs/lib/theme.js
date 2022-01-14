import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode( '#d9d9d9', '#333333')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
        'section-title': {
            textDecoration: 'underline',
            fontSize: 20,
            textUnderlineOffset: 6,
            textDecorationColor: '#525252',
            textDecorationThickness: 4,
            marginTop: 3,
            marginBottom: 4
        }
    }
},
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}
const fonts = {
    heading: "'Red Hat Display'"

}

const colors = {
    glassTeal: '#88ccca'

}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true

}

const theme = extendTheme ({
    config, 
    styles, 
    components,
    colors,
    fonts
})

export default theme