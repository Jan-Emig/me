import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const theme = extendTheme({ 
    config,
    styles: {
        global: {
            body: {
                bg: 'black',
                fontFamily: 'Inter, sans-serif'
            }
        },
    },
    components: {
        Button: {
            variants: {
                outline_brand: {
                    border: '1px solid',
                    borderColor: 'brand.500',
                    color: 'brand.500',
                    _hover: {
                        opacity: 1,
                    },
                    _active: {
                        opacity: 1,
                    },
                    opacity: 0.6,
                    transition: 'all 0.2s ease-in-out',
                }
            },
        },
    },
    colors: {
        brand: {
            50: '#E3FDF5',
            100: '#CFFBF3',
            200: '#A5F6E1',
            300: '#67E8D9',
            400: '#34D7CF',
            500: '#1DD1A1',
            600: '#1AB977',
            700: '#149E60',
            800: '#0F8554',
            900: '#0E6C4F',
        }
    }
});

export default theme;