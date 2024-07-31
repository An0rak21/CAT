'use client'

import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { DecisionTree as DecisionTreeType } from '../data/decisionSections';
import DecisionNode from './DecisionNode';

interface DecisionTreeProps {
  tree: DecisionTreeType;
  onAction: (actionId: string) => void;
}

const MotionBox = motion(Box);

const DecisionTree: React.FC<DecisionTreeProps> = ({ tree, onAction }) => {
  const renderNode = (nodeId: string, depth = 0) => {
    const node = tree.nodes[nodeId];
    if (!node) {
      console.warn(`Node with id ${nodeId} not found`);
      return null;
    }

    return (
      <AnimatePresence key={nodeId}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: depth * 0.1 }}
          mb={4}
        >
          <DecisionNode
            node={node}
            onAction={onAction}
          >
            {node.children && node.children.length > 0 && (
              <VStack spacing={4} align="stretch" ml={8} mt={4}>
                {node.children.map(childId => renderNode(childId, depth + 1))}
              </VStack>
            )}
          </DecisionNode>
        </MotionBox>
      </AnimatePresence>
    );
  };

  if (!tree || !tree.rootId || !tree.nodes) {
    return <Text>Arbre de décision invalide ou vide.</Text>;
  }

  return (
    <Box overflowX="auto" padding={4} maxWidth="100%">
      <VStack spacing={6} align="stretch">
        {renderNode(tree.rootId)}
      </VStack>
    </Box>
  );
};

export default DecisionTree;