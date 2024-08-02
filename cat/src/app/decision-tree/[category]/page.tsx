'use client'

import React from 'react'
import { Box, Container, Heading, VStack, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import InteractiveDecisionTree from '../../components/InteractiveDecisionTree'
import { decisionSections } from '../../data/decisionSections'
import { resultConfigurations } from '../../data/resultConfigurations'
import { FaStethoscope, FaMicroscope, FaBoxOpen } from 'react-icons/fa'
import { IconType } from 'react-icons'

const MotionBox = motion(Box)

type CategoryId = 'endoscope' | 'biologique' | 'nouveau'

export default function DecisionTreePage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params.category as CategoryId

  const tree = decisionSections[categoryId]

  const handleAction = (actionId: string) => {
    console.log(`Action sélectionnée : ${actionId}`);
    if (resultConfigurations[actionId]) {
      router.push(`/result/${actionId}`);
    } else {
      console.error(`Configuration de résultat non trouvée pour l'action : ${actionId}`);
    }
  }

  if (!tree) {
    return <Box>Catégorie non trouvée</Box>
  }

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <Box bg={bgColor} minHeight="100vh" py={16}>
      <Container maxWidth="container.xl">
        <VStack spacing={8}>
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              bgGradient="linear(to-r, teal.400, teal.600)"
              bgClip="text"
              fontWeight="extrabold"
              textAlign="center"
            >
              {getCategoryTitle(categoryId)}
            </Heading>
            <Text fontSize="xl" color={textColor} textAlign="center" maxWidth="2xl" mx="auto">
              Suivez l'arbre de décision pour obtenir la procédure adaptée.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            bg={useColorModeValue('white', 'gray.800')}
            borderRadius="xl"
            boxShadow="xl"
            p={8}
            width="full"
          >
            <InteractiveDecisionTree tree={tree} onAction={handleAction} />
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

const categoryTitles: Record<CategoryId, string> = {
  'endoscope': "Retour de maintenance d'un endoscope",
  'biologique': "Résultats biologiques non conformes pour un endoscope",
  'nouveau': "Réception d'un nouvel endoscope"
};

function getCategoryTitle(categoryId: CategoryId): string {
  return categoryTitles[categoryId] || "Situation inconnue";
}

const categoryIcons: Record<CategoryId, IconType> = {
  'endoscope': FaStethoscope,
  'biologique': FaMicroscope,
  'nouveau': FaBoxOpen
};

function getCategoryIcon(categoryId: CategoryId): IconType {
  return categoryIcons[categoryId] || FaStethoscope;
}