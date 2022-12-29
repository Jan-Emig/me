import { FC, lazy, useContext } from "react";
import { Box, createIcon, Spacer } from "@chakra-ui/react";

import SectionHeading from "../components/SectionHeading";
import MouseContext from "../context";
import { motion } from "framer-motion";
import { MotionBox } from "../components/motion";

const HeroRight = lazy(() => import('./subsections/HeroRight'));

const MouseIcon = createIcon({
    displayName: 'MouseIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
        <path fill="currentColor" d="m12 5-1 1v4a1 1 0 1 0 2 0V6l-1-1Z" />
        <path fill="currentColor" fill-rule="evenodd"
        d="M4 8a8 8 0 1 1 16 0v8a8 8 0 1 1-16 0V8Zm14 0v8a6 6 0 0 1-12 0V8a6 6 0 1 1 12 0Z" clip-rule="evenodd" />
        </>
    )
});

const Hero: FC = () => {
    const { toggleVisibility } = useContext(MouseContext);
    const render = () => {
        return (
            <>
                <Box
                    position='absolute'
                    top='100px'
                    left={{ sm: '0.5vw', hero_sm: '1.25vw', hero_md: '2.5vw', hero_lg: '5vw' }}
                    w={{ sm : '99vw', hero_sm: '98vw', hero_md: '95vw', hero_lg: '90vw' }}
                    h='calc(100vh - 64px - 70px)'
                    // border='1px solid'
                    // borderColor='brand.500'
                    borderRadius='sm'
                >
                    <MotionBox
                        position='absolute'
                        top='0'
                        left='0'
                        w='10%'
                        maxW='50px'
                        h='1px'
                        background='linear-gradient(90deg, rgba(29,209,161,1) 0%, rgba(0,0,0,0) 100%)' 
                        animate={{ 
                            left: ['100%', '0%'],
                            width: ['0%', '10%', '0%'],
                         }}
                         transition={{ 
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatDelay: 14.4,
                            delay: 5,
                          } as any}
                    />
                    <MotionBox
                        position='absolute'
                        top='0'
                        left='0'
                        h='10%'
                        maxH='50px'
                        w='1px'
                        background='linear-gradient(0deg, rgba(29,209,161,1) 0%, rgba(0,0,0,0) 100%)' 
                        animate={{ 
                            top: ['0%', '100%'],
                            height: ['0%', '10%', '0%'],
                         }}
                         transition={{ 
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatDelay: 14.4,
                            delay: 9.8,
                          } as any}
                    />
                    <MotionBox
                        position='absolute'
                        bottom='0'
                        left='0'
                        w='10%'
                        maxW='50px'
                        h='1px'
                        background='linear-gradient(-120deg, rgba(29,209,161,1) 0%, rgba(0,0,0,0) 100%)' 
                        animate={{ 
                            left: ['0%', '100%'],
                            width: ['0%', '10%', '0%'],
                         }}
                         transition={{ 
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatDelay: 14.4,
                            delay: 14.6,
                          } as any}
                    />
                    <MotionBox
                        position='absolute'
                        top='0'
                        right='0'
                        h='10%'
                        maxH='50px'
                        w='1px'
                        background='linear-gradient(180deg, rgba(29,209,161,1) 0%, rgba(0,0,0,0) 100%)' 
                        animate={{ 
                            top: ['100%', '0%'],
                            height: ['0%', '10%', '0%'],
                         }}
                         transition={{ 
                            duration: 5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatDelay: 14.4,
                            delay: 19.4,
                          } as any}
                    />
                </Box>
                <Box 
                    display={{ base: 'block', hero_sx: 'flex' }}
                    textAlign={{ base: 'center', hero_sx: 'left' }}
                    h='calc(100vh - 64px - 70px)'
                    p={5}
                    mt='30px'
                    mx={{ sm: '2vw', hero_sm: '5vw', hero_md: '10vw', hero_lg: '20vw' }}
                    flexGrow={3}
                >
                    <SectionHeading 
                        mt='50px'
                        ml={{ base: '50%', hero_sx: '0'}}
                        transform={{ base: 'translateX(-50%)', hero_sx: 'none' }} 
                    />
                    <Spacer />
                    <HeroRight />
                    <MotionBox
                        position='absolute'
                        left='calc(50% - 10px)'
                        initial={{ opacity: 0, bottom: '45px' }}
                        whileInView={{ opacity: 1, bottom: '55px' }}
                        transition={{ delay: 5 } as any}
                    >
                        <MouseIcon 
                            boxSize='5'
                            color='brand.500'
                            opacity={0.5}
                            _hover={{ 
                                opacity: 1, 
                                transform: 'scale(1.2)',
                            }}
                            transition='opacity, transform 0.3s ease-in-out'
                            onMouseEnter={toggleVisibility}
                            onMouseLeave={toggleVisibility}
                        />
                    </MotionBox>
                </Box>
            </>
        )
    }

    return render();
}

export default Hero;