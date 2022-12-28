import { FC } from "react";
import { Box, Container, createIcon, Flex, IconProps, Spacer } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";
import HexagonMask from '/src/assets/hexagon_mask.svg';
import Lottie from "lottie-react";
import FigureLottie from '../assets/figure_lottie.json';

const HexagonIcon = createIcon({
    displayName: 'HexagonIcon',
    viewBox: '0 0 306 354',
    path: <path d="M149 1.4a8 8 0 0 1 8 0l144.5 84.3a8 8 0 0 1 4 6.9v168.8a8 8 0 0 1-4 7L157 352.5a8 8 0 0 1-8 0L4.5 268.3a8 8 0 0 1-4-6.9V92.6a8 8 0 0 1 4-7L149 1.5Z"/>
});

const HexagonBorder: FC<IconProps> = (props) => {
    return (
        <HexagonIcon position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' fill='transparent' {...props} />
    )
}

const HeroRight: FC = () => {

    const render = () => {
        return (
            <Box 
                mt='130px'
            >
                <Box position='relative'>
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
    const render = () => {
        return (
            <Flex
                maxW='calc(100% - 20vw)'
                h='calc(100vh - 64px - 70px)'
                p={5}
                mt='30px'
                mx='20vw' 
                // border='1px solid'
                // borderColor='brand.500'
            >
                <SectionHeading mt='50px' />
                <Spacer />
                <HeroRight />
            </Flex>
        )
    }

    return render();
}

export default Hero;