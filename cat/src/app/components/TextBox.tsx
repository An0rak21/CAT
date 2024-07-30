'use client'

import { Box, Text } from '@chakra-ui/react'

interface TextBoxProps {
  content: string;
  flex?: number;
}

const TextBox: React.FC<TextBoxProps> = ({ content, flex = 1 }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} flex={flex}>
      <Text>{content}</Text>
    </Box>
  )
}

export default TextBox