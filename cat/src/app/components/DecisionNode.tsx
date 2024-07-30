'use client'

import React from 'react';
import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { DecisionNode as DecisionNodeType } from '../data/decisionSections';
import ActionButton from './ActionButton';

interface DecisionNodeProps {
  node: DecisionNodeType;
  onAction: (actionId: string) => void;
  children?: React.ReactNode;
}

const DecisionNode: React.FC<DecisionNodeProps> = ({ node, onAction, children }) => {
  return (
    <VStack align="start" spacing={4}>
      <Box 
        borderWidth={1} 
        borderRadius="md" 
        p={2} 
        bg={node.color} 
        color="white"
        minWidth="200px"
      >
        <Text>{node.content}</Text>
      </Box>
      {node.type === 'action' ? (
        <ActionButton onClick={() => onAction(node.id)} />
      ) : (
        <HStack spacing={4} align="start">
          {children}
        </HStack>
      )}
    </VStack>
  );
};

export default DecisionNode;