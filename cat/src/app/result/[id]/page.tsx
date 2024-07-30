'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'next/navigation'

export default function ResultPage() {
  const params = useParams()
  const resultId = params.id as string

  // Ici, vous devriez charger les données du résultat en fonction de l'ID
  // Pour l'exemple, nous utiliserons des données statiques
  const resultData = {
    title: "Résultat",
    description: "Voici le résultat basé sur vos choix."
  }

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={4}>
        {resultData.title}
      </Heading>
      <Text fontSize="lg">
        {resultData.description}
      </Text>
      <Text mt={4}>
        ID du résultat : {resultId}
      </Text>
    </Box>
  )
}