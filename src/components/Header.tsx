import { Box, BoxProps, Center, chakra, ChakraProps, Flex, FlexProps, Link, shouldForwardProp } from "@chakra-ui/react";
import { HTMLMotionProps, isValidMotionProp, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { SetShowMouseState } from "../App";
import MouseContext from "../context";

const MotionLink = chakra(motion.a, { shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop) || prop === 'transition'});

const MotionBox = chakra(motion.div, { shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop) || prop === 'transition'});

const NavLink: FC<{ content: string, href: string, fadeInDelay?: number, noSeparator?: boolean }> = ({ content, href, fadeInDelay = 0.2, noSeparator }) => {
    const { toggleVisibility } = useContext(MouseContext);
    return (
        <MotionBox
            display='flex'
            alignItems='center'
        >
            <MotionLink 
                initial={{ opacity: 0, top: '10px' }}
                whileInView={{ opacity: 1, top: 0 }}
                transition={{ delay: fadeInDelay } as any}
                // as={motion.a}
                pos='relative'
                href={href}
                _hover={{
                    color: 'brand.600',
                    opacity: 1
                 }}
                opacity={0.6}
                // transition='color, opacity 0.2s ease-in-out'
                onMouseEnter={toggleVisibility}
                onMouseLeave={toggleVisibility}
            >{content}</MotionLink>
            { !noSeparator && <Separator fadeInDelay={fadeInDelay + 0.4} /> }
        </MotionBox>
    )
}

const Separator: FC<ChakraProps & { fadeInDelay?: number}> = ({ fadeInDelay = 0.4, ...props}) => {
    return (
        <MotionBox
            position='relative'
            initial={{ opacity: 0, top: '-10px' }}
            whileInView={{ opacity: 1, top: 0 }}
            transition={{ delay: fadeInDelay } as any}
            display='flex' 
            alignItems='center'
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
        </MotionBox>

    )
};

const Header: FC = () => {
    const render = () => {
        return (
            <header>
                <Center mt='40px' color='whiteAlpha.700' fontWeight='bold'>
                    <NavLink content='Home' href='#'  />
                    <NavLink content='Why Me' href='#' fadeInDelay={0.4} />
                    <NavLink content='My Work' href='#' fadeInDelay={0.6} />
                    <NavLink content='Reviews' href='#' fadeInDelay={0.8} noSeparator />
                </Center>
            </header>
        )
    }

    return render();
}

export default Header;