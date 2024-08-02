'use client'

import React, { ReactNode } from 'react';
import { Box, Heading, Text, VStack, UnorderedList, ListItem, Button, Flex, Icon, Divider, Badge } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { resultConfigurations, ResultData } from '../../data/resultConfigurations'
import { FaCheckCircle, FaMicroscope, FaClipboardList, FaEnvelope, FaInfoCircle, FaPaperPlane, FaHome } from 'react-icons/fa'

interface SectionCardProps {
  title: string;
  icon: React.ElementType;
  children: ReactNode;
}

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

  const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children }) => (
    <Box 
      bg="white" 
      borderRadius="xl" 
      boxShadow="xl" 
      p={6} 
      position="relative" 
      overflow="hidden"
    >
      <Icon 
        as={icon} 
        position="absolute" 
        top="-10px" 
        right="-10px" 
        fontSize="100px" 
        color="teal.50" 
        zIndex={0}
      />
      <Heading as="h2" size="lg" mb={4} color="teal.600" zIndex={1} position="relative">
        {title}
      </Heading>
      <Box zIndex={1} position="relative">
        {children}
      </Box>
    </Box>
  )

  return (
    <Box maxWidth="1000px" margin="auto" padding={8} bg="gray.50" minHeight="100vh">
      <VStack spacing={8} align="stretch">
        <Box 
          bg="teal.600" 
          color="white" 
          p={6} 
          borderRadius="xl" 
          boxShadow="2xl"
        >
          <Heading as="h1" size="2xl">{resultData.title}</Heading>
        </Box>
        
        <Flex gap={8} flexWrap="wrap">
          <SectionCard title="Vérification" icon={FaCheckCircle}>
            <UnorderedList styleType="none" ml={0}>
              {resultData.verification?.map((item, index) => (
                <ListItem key={index} mb={2}>
                  <Flex alignItems="center">
                    <Icon as={FaCheckCircle} color="teal.400" mr={2} />
                    <Text>{item}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </SectionCard>
          
          <SectionCard title="Endoscope" icon={FaMicroscope}>
            <UnorderedList styleType="none" ml={0}>
              {resultData.endoscope.map((item, index) => (
                <ListItem key={index} mb={2}>
                  <Flex alignItems="center">
                    <Icon as={FaMicroscope} color="teal.400" mr={2} />
                    <Text>{item}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </SectionCard>
          
          <SectionCard title="Traçabilité" icon={FaClipboardList}>
            <UnorderedList styleType="none" ml={0}>
              {resultData.tracabilite.map((item, index) => (
                <ListItem key={index} mb={2}>
                  <Flex alignItems="center">
                    <Icon as={FaClipboardList} color="teal.400" mr={2} />
                    <Text>{item}</Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </SectionCard>
          
          <SectionCard title="Destinataires mail" icon={FaEnvelope}>
            <Flex flexWrap="wrap" gap={2}>
              {resultData.destinataires.map((item, index) => (
                <Badge key={index} colorScheme="teal" fontSize="md" p={2} borderRadius="full">
                  {item}
                </Badge>
              ))}
            </Flex>
          </SectionCard>
        </Flex>

        {resultData.info && (
          <Box 
            bg="orange.100" 
            p={6} 
            borderRadius="xl" 
            boxShadow="xl"
            borderLeft="8px solid" 
            borderColor="orange.400"
          >
            <Flex alignItems="center" mb={2}>
              <Icon as={FaInfoCircle} fontSize="2xl" color="orange.500" mr={2} />
              <Heading as="h3" size="lg" color="orange.700">
                Information importante
              </Heading>
            </Flex>
            <Text color="orange.800" fontSize="lg">{resultData.info}</Text>
          </Box>
        )}

        <Flex justifyContent="space-between" mt={6}>
          <Button 
            leftIcon={<FaPaperPlane />}
            colorScheme="teal" 
            size="lg"
            onClick={handleSendMail} 
            isDisabled={mailSent}
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.2s"
          >
            {mailSent ? "Mail envoyé" : "Envoyer le mail"}
          </Button>

          <Button 
            leftIcon={<FaHome />}
            onClick={() => router.push('/landing')}
            size="lg"
            variant="outline"
            colorScheme="teal"
            _hover={{ bg: 'teal.50' }}
          >
            Retour à l'accueil
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}