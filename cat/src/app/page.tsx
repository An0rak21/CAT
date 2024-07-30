'use client'

import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <Box maxWidth="800px" margin="auto" padding={8} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        Bienvenue sur Ma dApp
      </Heading>
      <Text fontSize="xl" mb={8}>
        Une application décentralisée pour [description de votre dApp]
      </Text>
      <Button 
        colorScheme="teal" 
        size="lg" 
        onClick={() => router.push('/landing')}
      >
        Commencer
      </Button>
    </Box>
  )
}