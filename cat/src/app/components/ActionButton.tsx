'use client'

import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ActionButtonProps {
  onClick: () => void;
}

const MotionButton = motion(Button);

const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  const bgColor = useColorModeValue('teal.500', 'teal.200');
  const textColor = useColorModeValue('white', 'gray.800');

  return (
    <MotionButton
      onClick={onClick}
      borderRadius="full"
      size="sm"
      bg={bgColor}
      color={textColor}
      _hover={{ bg: useColorModeValue('teal.600', 'teal.300') }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      Action
    </MotionButton>
  );
};

export default ActionButton;