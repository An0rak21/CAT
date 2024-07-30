'use client'

import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import CategoryCard from '../components/CategoryCard'
import { decisionSections } from '../data/decisionSections'

const categories = [
  { id: 'endoscope', title: 'Situation N°1', description: "Retour de maintenance d'un endoscope" },
  { id: 'biologique', title: 'Situation N°2', description: "Résultats biologique non conforme pour un endoscope" },
  { id: 'nouveau', title: 'Situation N°3', description: "Réception d'un nouvel endoscope" },
]

export default function LandingPage() {
  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Choisissez une situation
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {categories.map((category) => (
          <CategoryCard 
            key={category.id} 
            {...category} 
            isAvailable={!!decisionSections[category.id]}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}