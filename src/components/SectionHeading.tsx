import { Box, BoxProps, Button, Heading, ResponsiveValue, Text } from "@chakra-ui/react";
import { FC, useContext } from "react";
import MouseContext from "../context";
import { MotionBox } from "./motion";


const animationProps = {
    position:'relative' as ResponsiveValue<'relative'>,
    initial:{ opacity: 0, left: '-10px' },
    whileInView: { opacity: 1, left: 0 },
    viewport: { once: true }
}

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
                <MotionBox
                    {...animationProps}
                    transition={{ delay: 0.5 } as any}
                >
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
                </MotionBox>
                <MotionBox
                    {...animationProps}
                    transition={{ delay: 1.3 } as any}
                >
                    <Heading size='3xl'>Full Stack</Heading>
                </MotionBox>
                <MotionBox
                    {...animationProps}
                    transition={{ delay: 1.5 } as any}
                >
                    <Heading size='3xl'>Web Developer</Heading>
                </MotionBox>
                <MotionBox
                    {...animationProps}
                    transition={{ delay: 2.1 } as any}
                >
                    <Text mt={6} opacity={0.8} w='100%' wordBreak='break-all'>
                        Building feature-rich web apps from ground up is my job. 
                    </Text>
                </MotionBox>
                <MotionBox
                    {...animationProps}
                    transition={{ delay: 2.3 } as any}
                >
                    <Text color='brand.500' opacity={0.8}>Your ideas. Your rules.</Text>
                </MotionBox>
                <MotionBox
                    {...animationProps}
                    transition={{ delay: 2.8 } as any}
                >
                    <Button 
                        variant='outline_brand'
                        size='sm'
                        mt={3}
                        borderRadius='lg'
                        onMouseEnter={toggleVisibility}
                        onMouseLeave={toggleVisibility}
                    >Let's talk</Button>
                </MotionBox>
            </Box>
        )
    };

    return render();
}

export default SectionHeading;