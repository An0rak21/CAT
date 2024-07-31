'use client'

import { Box, Flex, VStack, Heading, Text, Button, Container, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { motion, Variants } from 'framer-motion'

const MotionVStack = motion(VStack)
const MotionBox = motion(Box)

export default function Home() {
  const router = useRouter()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <Box bg={bgColor} minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxWidth="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
          <MotionVStack
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            spacing={8}
            align="flex-start"
            maxWidth={{ base: '100%', md: '60%' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading
              as="h1"
              size="3xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Bienvenue sur C.A.T.
            </Heading>
            <Text fontSize="xl" color={textColor} lineHeight="tall">
              L'application "CAT" est une solution innovante conçue pour standardiser les procédures à suivre dans les principales situations relatives à la gestion des endoscopes souples thermolabiles au sein de l'UGDRE du CHU de Dijon. Elle assure une gestion rigoureuse des risques en endoscopie, conformément à la norme ISO 9001.
            </Text>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              colorScheme="teal"
              size="lg"
              onClick={() => router.push('/landing')}
              px={8}
              py={6}
              fontSize="xl"
              fontWeight="bold"
              boxShadow="lg"
            >
              Commencer
            </Button>
          </MotionVStack>
          <MotionBox
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            maxWidth={{ base: '100%', md: '40%' }}
            mt={{ base: 12, md: 0 }}
          >
            {/* Vous pouvez ajouter une image ou une illustration ici */}
            <Box
              width="100%"
              height="300px"
              bg="teal.500"
              borderRadius="xl"
              boxShadow="2xl"
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}