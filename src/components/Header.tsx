import { Box, BoxProps, Center, Flex, FlexProps, Link } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { SetShowMouseState } from "../App";
import MouseContext from "../context";

const NavLink: FC<{ content: string, href: string, noSeparator?: boolean }> = ({ content, href, noSeparator }) => {
    const { toggleVisibility } = useContext(MouseContext);
    return (
        <>
            <Link 
                href={href}
                _hover={{
                    color: 'brand.600',
                    opacity: 1
                 }}
                 opacity={0.6}
                transition='color, opacity 0.2s ease-in-out'
                onMouseEnter={toggleVisibility}
                onMouseLeave={toggleVisibility}
            >{content}</Link>
            { !noSeparator && <Separator /> }
        </>
    )
}

const Separator: FC<FlexProps> = (props) => {
    return (
        <Flex 
            mx={5}
            opacity={0.6}
            {...props}
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
                    <NavLink content='Home' href='#' />
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