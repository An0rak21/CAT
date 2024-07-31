'use client'

import { Box, Heading, Text, VStack, UnorderedList, ListItem, Button } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { resultConfigurations, ResultData } from '../../data/resultConfigurations'

export default function ResultPage() {
  const params = useParams()
  const resultId = params.id as string
  const router = useRouter()
  const [mailSent, setMailSent] = useState(false)

  const resultData = resultConfigurations[resultId]

  if (!resultData) {
    return <Box>Résultat non trouvé</Box>
  }

  const handleSendMail = () => {
    console.log("Envoi du mail")
    setMailSent(true)
  }

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl">{resultData.title}</Heading>
        
        <Box>
          <Heading as="h2" size="lg" mb={2}>Vérification</Heading>
          <UnorderedList>
            {resultData.verification.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        
        <Box>
          <Heading as="h2" size="lg" mb={2}>Endoscope</Heading>
          <UnorderedList>
            {resultData.endoscope.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        
        <Box>
          <Heading as="h2" size="lg" mb={2}>Traçabilité</Heading>
          <UnorderedList>
            {resultData.tracabilite.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        
        <Box>
          <Heading as="h2" size="lg" mb={2}>Destinataires mail</Heading>
          <Text>{resultData.destinataires.join(', ')}</Text>
        </Box>

        <Button 
          colorScheme="blue" 
          onClick={handleSendMail} 
          isDisabled={mailSent}
        >
          {mailSent ? "Mail envoyé" : "Envoyer le mail"}
        </Button>

        <Button onClick={() => router.push('/landing')}>
          Retour à l'accueil
        </Button>
      </VStack>
    </Box>
  )
}