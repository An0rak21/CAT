'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

interface CategoryCardProps {
  id: string
  title: string
  description: string
  isAvailable: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, title, description, isAvailable }) => {
  const router = useRouter()

  const handleClick = () => {
    if (isAvailable) {
      router.push(`/decision-tree/${id}`)
    } else {
      alert("Cette situation n'est pas encore disponible.")
    }
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      cursor={isAvailable ? "pointer" : "not-allowed"}
      onClick={handleClick}
      _hover={{ boxShadow: 'md' }}
      opacity={isAvailable ? 1 : 0.5}
    >
      <VStack spacing={3} align="start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        {!isAvailable && <Text color="red.500">Non disponible</Text>}
      </VStack>
    </Box>
  )
}

export default CategoryCard