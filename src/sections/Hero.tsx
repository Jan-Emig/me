import { FC, lazy, useContext } from "react";
import { Box, createIcon, Spacer } from "@chakra-ui/react";

import SectionHeading from "../components/SectionHeading";
import MouseContext from "../context";

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
                <MouseIcon 
                    position='absolute'
                    bottom='20px'
                    left='calc(50% - 10px)'
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
            </Box>
        )
    }

    return render();
}

export default Hero;