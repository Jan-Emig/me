import { Box, BoxProps, createIcon, Heading, IconProps } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { FC } from "react";

import HexagonMask from '/src/assets/hexagon_mask.svg';
import FigureLottie from '../../assets/figure_lottie.json';
import { MotionBox } from "../../components/motion";

const skills = [ 'React', 'MySQL', 'Laravel', 'TypeScript' ].sort((a, b) => 0.5 - Math.random());

const HexagonIcon = createIcon({
    displayName: 'HexagonIcon',
    viewBox: '0 0 306 354',
    path: <path d="M149 1.4a8 8 0 0 1 8 0l144.5 84.3a8 8 0 0 1 4 6.9v168.8a8 8 0 0 1-4 7L157 352.5a8 8 0 0 1-8 0L4.5 268.3a8 8 0 0 1-4-6.9V92.6a8 8 0 0 1 4-7L149 1.5Z"/>
});

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
            <Heading 
                position='relative'
                size={headingSize}
                _after={{ 
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '110%',
                    height: '110%',
                    backgroundColor: 'brand.500',
                    zIndex: -1,
                    opacity: 0.3,
                    filter: 'blur(20px)',
                 }}
            >{ name }</Heading>
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
            <MotionBox 
                position='relative'
                initial={{ opacity: 0, top: '100px' }}
                whileInView={{ opacity: 1, top: 0 }}
                transition={{ delay: 4 } as any}
                mt={{ base: '2rem', hero_sm: '180px'}}
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
            </MotionBox>
        )
    }

    return render();
};

export default HeroRight;