import { Box, BoxProps, Button, Heading, Text } from "@chakra-ui/react";
import { FC, useContext } from "react";
import MouseContext from "../context";

type SectionHeadingProps = BoxProps & {

}

const SectionHeading: FC<SectionHeadingProps> = ({ ...props  }) => {

    const { toggleVisibility } = useContext(MouseContext);

    const render = () => {
        return (
            <Box position='relative' {...props} w='max-content'>
                <Box 
                    position='absolute'
                    top='0.5rem'
                    left='10px'
                    boxSize='1px'
                    bgColor='brand.500'
                    filter='blur(10px)'
                />
                <Heading 
                    size='md'
                    color='brand.500'
                    position='relative'
                    left={{ base: '50%', hero_sx: '0' }}
                    transform={{ base: 'translateX(-50%)', hero_sx: 'none' }}
                    w='fit-content'
                    _after={{ 
                        content: '""',
                        position: 'absolute',
                        top: '0.5rem',
                        left: '0',
                        width: '100%',
                        h:'50%',
                        bgColor: 'brand.500',
                        zIndex: -1,
                        opacity: 0.5,
                        filter: 'blur(10px)'
                     }}
                >Jan Emig</Heading>
                <Heading size='3xl'>Full Stack</Heading>
                <Heading size='3xl'>Web Developer</Heading>
                <Text mt={6} opacity={0.8} w='100%' wordBreak='break-all'>
                    Building feature-rich web apps from ground up is my job. 
                </Text>
                <Text color='brand.500' opacity={0.8}>Your ideas. Your rules.</Text>
                <Button 
                    variant='outline_brand'
                    size='sm'
                    mt={3}
                    borderRadius='lg'
                    onMouseEnter={toggleVisibility}
                    onMouseLeave={toggleVisibility}
                >Let's talk</Button>
            </Box>
        )
    };

    return render();
}

export default SectionHeading;