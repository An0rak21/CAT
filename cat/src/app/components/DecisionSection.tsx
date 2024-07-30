'use client'

import { VStack } from '@chakra-ui/react'
import TextBox from './TextBox'
import RoundButton from './RoundButton'

interface DecisionSectionProps {
  texts: string[]
  buttonLabel: string
  onButtonClick: () => void
}

const DecisionSection: React.FC<DecisionSectionProps> = ({ texts, buttonLabel, onButtonClick }) => {
  return (
    <VStack spacing={4} align="stretch" mb={8}>
      {texts.map((text, index) => (
        <TextBox key={index} content={text} />
      ))}
      <RoundButton label={buttonLabel} onClick={onButtonClick} />
    </VStack>
  )
}

export default DecisionSection