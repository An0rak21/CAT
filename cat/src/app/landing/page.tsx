'use client'

import React from 'react'
import { Box, Heading, SimpleGrid, Container, Text, useColorModeValue, VStack, Icon, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaStethoscope, FaMicroscope, FaBoxOpen } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { IconType } from 'react-icons'

const MotionBox = motion(Box)

interface Category {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

const categories: Category[] = [
  { id: 'endoscope', title: 'Situation N°1', description: "Retour de maintenance d'un endoscope", icon: FaStethoscope },
  { id: 'biologique', title: 'Situation N°2', description: "Résultats biologique non conforme pour un endoscope", icon: FaMicroscope },
  { id: 'nouveau', title: 'Situation N°3', description: "Réception d'un nouvel endoscope", icon: FaBoxOpen },
]

export default function LandingPage() {
  const router = useRouter()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const cardBgColor = useColorModeValue('white', 'gray.800')

  const handleCategoryClick = (id: string) => {
    router.push(`/decision/${id}`)
  }

  return (
    <Box bg={bgColor} minHeight="100vh" py={16}>
      <Container maxWidth="container.xl">
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size="3xl"
              mb={4}
              bgGradient="linear(to-r, teal.400, teal.600)"
              bgClip="text"
              fontWeight="extrabold"
              textAlign="center"
            >
              Centre de Décision Endoscopique
            </Heading>
            <Text fontSize="xl" color={textColor} textAlign="center" maxWidth="2xl" mx="auto">
              Naviguez à travers nos situations pour obtenir des procédures précises et à jour.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="full">
            {categories.map((category, index) => (
              <MotionBox
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  bg={cardBgColor}
                  borderRadius="xl"
                  boxShadow="xl"
                  p={8}
                  height="full"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl', cursor: 'pointer' }}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <Icon as={category.icon} w={12} h={12} color="teal.500" mb={4} />
                  <Heading as="h3" size="lg" mb={2} color="teal.600" textAlign="center">
                    {category.title}
                  </Heading>
                  <Text color={textColor} textAlign="center">
                    {category.description}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}