'use client'

import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
  return (
    <Box as="nav" bg="teal.500" color="white" p={4}>
      <Flex align="center">
        <Heading size="md">Ma dApp</Heading>
        <Spacer />
        <ThemeToggle />
      </Flex>
    </Box>
  )
}

export default Navbar