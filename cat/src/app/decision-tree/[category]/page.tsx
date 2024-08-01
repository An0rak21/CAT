'use client'

import { Box, Container, Heading } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import InteractiveDecisionTree from '../../components/InteractiveDecisionTree'
import { decisionSections } from '../../data/decisionSections'
import { resultConfigurations } from '../../data/resultConfigurations'

export default function DecisionTreePage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params.category as string

  const tree = decisionSections[categoryId]

  const handleAction = (actionId: string) => {
    console.log(`Action sélectionnée : ${actionId}`);
    // Vérification de la configuration de résultat
    if (resultConfigurations[actionId]) {
      // Si oui redirection vers la page de résultat
      router.push(`/result/${actionId}`);
    } else {
      console.error(`Configuration de résultat non trouvée pour l'action : ${actionId}`);
      // Gestion des erreurs
    }
  }

  if (!tree) {
    return <Box>Catégorie non trouvée</Box>
  }

  return (
    <Container maxWidth="800px" py={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        {getCategoryTitle(categoryId)}
      </Heading>
      <InteractiveDecisionTree tree={tree} onAction={handleAction} />
    </Container>
  )
}

function getCategoryTitle(categoryId: string) {
  switch (categoryId) {
    case 'endoscope':
      return "Retour de maintenance d'un endoscope";
    case 'biologique':
      return "Résultats biologiques non conformes pour un endoscope";
    case 'nouveau':
      return "Réception d'un nouvel endoscope";
    default:
      return "Situation inconnue";
  }
}