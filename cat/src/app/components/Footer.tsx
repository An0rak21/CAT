'use client'

import { Box, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="teal.500" color="white" p={4} textAlign="center">
      <Text>&copy; 2024 C.A.T. Tous droits réservés.</Text>
    </Box>
  )
}

export default Footer