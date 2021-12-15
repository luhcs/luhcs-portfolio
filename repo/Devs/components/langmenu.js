import {
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Button,
    IconButton,
    Container,
    Link,
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
                leftIcon={<Flag country="BR" size={20} />}
                aria-label="languages"
                variant="outline"
                rightIcon={<ChevronDownIcon />}
                ml={"10px"}
                p={'2'}
            >pt-BR</MenuButton>
            <MenuList w={'10px'}>
                <NextLink href="/" passHref>
                    <MenuItem as={Link} fontSize={'14px'}><Flag country="BR" size={20}/><p>&nbsp;<b>pt-BR</b></p></MenuItem>
                </NextLink>
            </MenuList>
        </Menu>
    )
}

export default Langmenu