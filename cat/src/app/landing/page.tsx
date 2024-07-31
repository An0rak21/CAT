'use client'

import { Box, Heading, SimpleGrid, Container, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CategoryCard from '../components/CategoryCard'
import { decisionSections } from '../data/decisionSections'

const MotionSimpleGrid = motion(SimpleGrid)

const categories = [
  { id: 'endoscope', title: 'Situation N°1', description: "Retour de maintenance d'un endoscope" },
  { id: 'biologique', title: 'Situation N°2', description: "Résultats biologique non conforme pour un endoscope" },
  { id: 'nouveau', title: 'Situation N°3', description: "Réception d'un nouvel endoscope" },
]

export default function LandingPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <Box bg={bgColor} minHeight="100vh" py={16}>
      <Container maxWidth="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, teal.400, blue.500)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Choisissez une situation
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Sélectionnez la situation qui correspond à votre cas pour obtenir les procédures à suivre.
          </Text>
        </Box>
        <MotionSimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard 
                {...category} 
                isAvailable={!!decisionSections[category.id]}
              />
            </motion.div>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  )
}