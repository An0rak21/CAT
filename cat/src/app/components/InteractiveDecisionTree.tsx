'use client'

import React, { useState } from 'react';
import { Box, VStack, Heading, Text, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { DecisionTree as DecisionTreeType, DecisionNode } from '../data/decisionSections';

interface InteractiveDecisionTreeProps {
  tree: DecisionTreeType;
  onAction: (actionId: string) => void;
}

const MotionBox = motion(Box);

const InteractiveDecisionTree: React.FC<InteractiveDecisionTreeProps> = ({ tree, onAction }) => {
  const [currentNodeId, setCurrentNodeId] = useState(tree.rootId);
  const [history, setHistory] = useState<string[]>([]);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'white');

  const currentNode = tree.nodes[currentNodeId];

  const handleChoice = (childId: string) => {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(childId);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousNodeId = newHistory.pop();
      setHistory(newHistory);
      setCurrentNodeId(previousNodeId!);
    }
  };

  const renderNode = (node: DecisionNode) => (
    <MotionBox
      key={node.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      bg={bgColor}
      borderWidth={1}
      borderColor={borderColor}
      borderRadius="lg"
      p={6}
      boxShadow="lg"
      width="100%"
      maxWidth="600px"
    >
      <VStack spacing={4} align="stretch">
        <Heading size="md" color={node.color || 'teal.500'}>
          {node.content}
        </Heading>
        {node.type === 'action' ? (
          <Button colorScheme="teal" onClick={() => onAction(node.id)}>
            Exécuter l'action
          </Button>
        ) : (
          node.children?.map((childId) => (
            <Button 
              key={childId} 
              onClick={() => handleChoice(childId)}
              variant="outline"
              colorScheme="teal"
            >
              {tree.nodes[childId].content}
            </Button>
          ))
        )}
      </VStack>
    </MotionBox>
  );

  return (
    <Flex direction="column" align="center" width="100%" p={4}>
      <AnimatePresence mode="wait">
        {renderNode(currentNode)}
      </AnimatePresence>
      {history.length > 0 && (
        <Button mt={4} onClick={handleBack} variant="ghost">
          Retour
        </Button>
      )}
    </Flex>
  );
};

export default InteractiveDecisionTree;