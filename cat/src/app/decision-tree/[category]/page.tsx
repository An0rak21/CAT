'use client'

import { Box, Heading } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import DecisionTree from '../../components/DecisionTree'
import { decisionSections } from '../../data/decisionSections'

export default function DecisionTreePage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params.category as string

  const tree = decisionSections[categoryId]

  const handleAction = (actionId: string) => {
    // Ici, vous pouvez gérer l'action en fonction de l'ID
    console.log(`Action sélectionnée : ${actionId}`);
    // Par exemple, rediriger vers une page de résultat :
    // router.push(`/result/${actionId}`)
  }

  if (!tree) {
    return <Box>Catégorie non trouvée</Box>
  }

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Arbre décisionnel pour {categoryId}
      </Heading>
      <DecisionTree tree={tree} onAction={handleAction} />
    </Box>
  )
}