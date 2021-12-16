import {
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Button,
    IconButton,
    Container,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import {
    ChevronDownIcon,
} from '@chakra-ui/icons'
import Flag from 'react-flagkit'
import NextLink from 'next/link'

const Langmenu = () => {
    return (
        <Menu isLazy id="langmenu">
            <MenuButton
                as={IconButton}
                transition='all 0.2s'
                aria-label="languages"
                variant="outline"
                rightIcon={<ChevronDownIcon />}
                ml={"10px"}
                p={'2'}
                
            ><Flag country="BR" size={20} /></MenuButton>
            <MenuList 
            p={'0.2'}
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px' }}
            >
                <NextLink href="/" passHref>
                    <MenuItem as={Link} fontSize={'14px'}><Flag country="BR" size={20}/><p>&nbsp;<b>pt-BR</b></p></MenuItem>
                </NextLink>
            </MenuList>
        </Menu>
    )
}

export default Langmenu