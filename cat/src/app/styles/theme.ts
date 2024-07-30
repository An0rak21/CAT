import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  colors: {
    teal: {
      500: '#319795',
    },
    blue: {
      500: '#3182CE',
    },
    red: {
      500: '#E53E3E',
    },
  },
  config,
})

export default theme