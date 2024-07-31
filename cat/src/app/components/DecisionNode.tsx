'use client'

import React from 'react';
import { Box, Text, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { DecisionNode as DecisionNodeType } from '../data/decisionSections';
import ActionButton from './ActionButton';

interface DecisionNodeProps {
  node: DecisionNodeType;
  onAction: (actionId: string) => void;
  children?: React.ReactNode;
}

const MotionBox = motion(Box);

const DecisionNode: React.FC<DecisionNodeProps> = ({ node, onAction, children }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'white');

  if (!node) {
    return null;
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <VStack align="start" spacing={4}>
        <Box 
          borderWidth={1} 
          borderRadius="md" 
          p={4} 
          bg={node.color || useColorModeValue('teal.500', 'teal.200')}
          color={textColor}
          minWidth="200px"
          boxShadow="md"
          borderColor={borderColor}
        >
          <Text fontWeight="medium">{node.content}</Text>
        </Box>
        {node.type === 'action' ? (
          <ActionButton onClick={() => onAction(node.id)} />
        ) : (
          <HStack spacing={4} align="start" flexWrap="wrap">
            {children}
          </HStack>
        )}
      </VStack>
    </MotionBox>
  );
};

export default DecisionNode;