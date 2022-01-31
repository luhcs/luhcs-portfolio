import { Box, Container } from '@chakra-ui/react'

const Footer = () => {
 return(
<Box align="center" opacity={0.4} fontSize="sm">
&copy; {new Date().getFullYear()} Lucas Gomes. All Rights Reserved. 
</Box>
 )
}

export default Footer