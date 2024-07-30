'use client'

import React from 'react';
import { Button } from '@chakra-ui/react';

interface ActionButtonProps {
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      borderRadius="full"
      size="sm"
      colorScheme="teal"
    >
      Action
    </Button>
  );
};

export default ActionButton;