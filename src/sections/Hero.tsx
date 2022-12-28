import { FC, useContext } from "react";
import { Box, BoxProps, Container, createIcon, Flex, Heading, IconProps, ResponsiveValue, Spacer, ThemeTypings } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";
import HexagonMask from '/src/assets/hexagon_mask.svg';
import Lottie from "lottie-react";
import FigureLottie from '../assets/figure_lottie.json';
import MouseContext from "../context";


const skills = [ 'React', 'MySQL', 'Laravel', 'TypeScript' ].sort((a, b) => 0.5 - Math.random());

const HexagonIcon = createIcon({
    displayName: 'HexagonIcon',
    viewBox: '0 0 306 354',
    path: <path d="M149 1.4a8 8 0 0 1 8 0l144.5 84.3a8 8 0 0 1 4 6.9v168.8a8 8 0 0 1-4 7L157 352.5a8 8 0 0 1-8 0L4.5 268.3a8 8 0 0 1-4-6.9V92.6a8 8 0 0 1 4-7L149 1.5Z"/>
});

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
})
const SkillBox: FC<BoxProps & { name: string, size?: 'sm' | 'md' | 'lg'}> = ({name, size = 'md', ...props}) => {
    const getCompSize = (size: string) => {
        const sizes = { headingSize: 'md' }
        if (size === 'sm') return { headingSize: 'sm'};
        return sizes;
    }
    
    const { headingSize } = getCompSize(size);
    
    return (
        <Box
            position='absolute'
            border='1px'
            borderRadius='lg'
            borderColor='brand.500'
            px={5}
            py={3}
            fontWeight='bold'
            color='brand.500'
            _after={{ 
                content: '""',
                position: 'absolute',
                top: '-5px',
                left: '-5px',
                width: 'calc(100% + 10px)',
                h:'calc(100% + 10px)',
                border: '1px',
                borderColor: 'brand.500',
                borderRadius: '10px',
                zIndex: -1,
                opacity: 0.5,
            }}
            {...props}
        >
            <Heading size={headingSize}>{ name }</Heading>
        </Box>
    )
};

const HexagonBorder: FC<IconProps> = (props) => {
    return (
        <HexagonIcon 
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            fill='transparent' 
            {...props} 
        />
    )
}

const HeroRight: FC = () => {

    const render = () => {
        return (
            <Box 
                position='relative'
                mt={{ base: '2rem', hero_sm: '130px'}}
                w={{ base: '', hero_sx: '230px', hero_sm: 'fit-content' }}
            >
                <Box
                    position='relative'
                    w='fit-content'
                    left={{ base: '50%', hero_sm: '0' }}
                    transform={{ base: 'translateX(-50%) scale(0.6)', hero_sm: 'scale(0.9)', hero_md: 'scale(1)' }}
                >
                    <SkillBox name={skills[0]} top='-20px' right='calc(100% - 40px)' />
                    <SkillBox name={skills[1]} size='sm' top='0px' left='calc(100% - 40px)' />
                    <SkillBox name={skills[2]} size='sm' bottom='10px' left='-110px' />
                    <SkillBox name={skills[3]} size='md' bottom='-25px' right='-85px' />
                    <HexagonIcon
                        position='absolute'
                        left='2%'
                        top='2%'
                        fill='brand.500'
                        boxSize='380px'
                        filter='blur(20px)'
                        opacity={0.6}
                    />
                    <HexagonIcon fill='brand.500' boxSize='380px' />
                    <HexagonBorder strokeWidth={2} stroke='brand.500' boxSize='400px' />
                    <HexagonBorder strokeWidth={1} stroke='brand.500' boxSize='415px' />
                    <Box
                        position='absolute'
                        top='-135px'
                        left='37px'
                        w='380px'
                        h='515px'
                        style={{ maskImage: `url(${HexagonMask})`, WebkitMaskImage: `url(${HexagonMask})`, maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }}
                        >
                            <Lottie animationData={FigureLottie} loop autoplay style={{ position: 'absolute', bottom: '-30px', left: '-430px', width: '1000px' }} />    
                    </Box>
                </Box>
            </Box>
        )
    }

    return render();
};


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
                // overflowX='hidden'
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