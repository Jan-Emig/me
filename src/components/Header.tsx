import { Box, Center, Flex, Link } from "@chakra-ui/react";
import { FC } from "react";

const NavLink: FC<{ content: string, href: string, noSeparator?: boolean }> = ({ content, href, noSeparator }) => {
    return (
        <>
            <Link 
                href={href}
                _hover={{
                    color: 'brand.600'
                 }}
                transition='all 0.2s ease-in-out'
            >{content}</Link>
            { !noSeparator && <Separator /> }
        </>
    )
}

const Separator: FC = () => {
    return (
        <Flex 
            mx={5}
        >
            <Box 
                boxSize='1px' 
                borderLeftRadius='1px'
                bgColor='white'
            />
            <Box
                h='1px'
                w='10px'
                bgColor='white'
                mx='2px'
            />
            <Box 
                boxSize='1px' 
                borderRightRadius='1px'
                bgColor='white'
            />
        </Flex>

    )
};

const Header: FC = () => {
    const render = () => {
        return (
            <header>
                <Center mt='40px' color='whiteAlpha.700' fontWeight='bold'>
                    <NavLink content='Home' href='#'/>
                    <NavLink content='Why Me' href='#' />
                    <NavLink content='My Work' href='#' />
                    <NavLink content='Reviews' href='#' noSeparator />
                </Center>
            </header>
        )
    }

    return render();
}

export default Header;