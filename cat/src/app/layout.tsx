'use client'

import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import theme from './styles/theme'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ChakraProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}