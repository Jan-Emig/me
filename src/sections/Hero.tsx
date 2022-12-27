import { Box, Container, Flex } from "@chakra-ui/react";
import { FC } from "react";
import SectionHeading from "../components/SectionHeading";


const Hero: FC = () => {

    const render = () => {
        return (
            <Flex
                maxW='calc(100% - 20vw)'
                h='calc(100vh - 64px - 70px)'
                // maxH='calc(100% - 40px)'
                // h='calc(100% - 40px)'
                p={5}
                mt='30px'
                mx='10vw' 
                border='1px solid'
                borderColor='brand.500'
            >
                <Box>
                    <SectionHeading mt='50px' />
                </Box>
            </Flex>
        )
    }

    return render();
}

export default Hero;