'use client'

import { Button } from '@chakra-ui/react'

interface RoundButtonProps {
  label: string
  onClick: () => void
}

const RoundButton: React.FC<RoundButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      onClick={onClick}
      borderRadius="full"
      size="lg"
      colorScheme="teal"
      margin="0 auto"
      display="block"
    >
      {label}
    </Button>
  )
}

export default RoundButton