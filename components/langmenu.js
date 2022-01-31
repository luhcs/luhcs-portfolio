import {
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import {
    ChevronDownIcon,
} from '@chakra-ui/icons'
import Flag from 'react-flagkit'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'


const Langmenu = () => {

    let { t } = useTranslation();
    let router = useRouter();

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
                
            ><Flag country={t("common:flag")} size={20} /></MenuButton>
            <MenuList 
            minWidth='3'
            p={'0.2'}
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px' }}
            fontFamily={"'Red Hat Display'"}> 
            <NextLink href={router.asPath} locale="pt-BR" passHref>
            <MenuItem as={Link} fontSize={'14px'}><Flag country="BR" size={20}/><p>&nbsp;&nbsp;<b><a>pt-BR</a></b></p></MenuItem>
        </NextLink>
        <NextLink href={router.asPath} locale="en" passHref>
            <MenuItem as={Link} fontSize={'14px'}><Flag country="US" size={20}/><p>&nbsp;&nbsp;<b>en-US</b></p></MenuItem>
        </NextLink>
        <NextLink href={router.asPath} locale="es" passHref>
            <MenuItem as={Link} fontSize={'14px'}><Flag country="ES" size={20}/><p>&nbsp;&nbsp;<b>es-ES</b></p></MenuItem>
        </NextLink>
               
            </MenuList>
        </Menu>
        
    )
}

export default Langmenu