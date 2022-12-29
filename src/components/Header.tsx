import { Box, Center, ChakraProps, Link } from "@chakra-ui/react";
import { FC, useContext } from "react";
import MouseContext from "../context";
import { MotionBox, MotionLink } from "./motion";

const NavLink: FC<{ content: string, href: string, fadeInDelay?: number, noSeparator?: boolean }> = ({ content, href, fadeInDelay = 0.2, noSeparator }) => {
    const { toggleVisibility } = useContext(MouseContext);
    return (
        <MotionBox
            display='flex'
            alignItems='center'
        >
            <MotionBox
                pos='relative'
                initial={{ opacity: 0, top: '10px' }}
                whileInView={{ opacity: 1, top: 0 }}
                transition={{ delay: fadeInDelay } as any}
            >
                <Link 
                    // as={motion.a}
                    pos='relative'
                    href={href}
                    _hover={{
                        color: 'brand.600',
                        opacity: 1
                    }}
                    transition='all 0.2s ease-in-out'
                    opacity={0.6}
                    onMouseEnter={toggleVisibility}
                    onMouseLeave={toggleVisibility}
                >{content}</Link>
            </MotionBox>
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
                    <NavLink content='Home' href='#' fadeInDelay={5}  />
                    <NavLink content='Why Me' href='#' fadeInDelay={5.2} />
                    <NavLink content='My Work' href='#' fadeInDelay={5.4} />
                    <NavLink content='Reviews' href='#' fadeInDelay={5.6} noSeparator />
                </Center>
            </header>
        )
    }

    return render();
}

export default Header;