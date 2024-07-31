'use client'
import React from 'react';
import { Box, Flex, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { decisionSections, DecisionNode } from '../data/decisionSections';

const renderNode = (node: DecisionNode, nodes: { [key: string]: DecisionNode }) => {
  const children = node.children ? node.children.map(id => nodes[id]) : [];
  const isChoice = node.type === 'choice';

  return (
    <VStack spacing={4} alignItems="flex-start" key={node.id}>
      <Button colorScheme={node.color} size="lg" width={350}>
        {node.content}
      </Button>
      {children.length > 0 && (
        <HStack spacing={4} alignItems="center">
          {children.map((child, index) => (
            <React.Fragment key={child.id}>
              {index > 0 && <Icon as={ArrowForwardIcon} boxSize={6} />}
              {renderNode(child, nodes)}
            </React.Fragment>
          ))}
        </HStack>
      )}
    </VStack>
  );
};

const MaintenancePage = () => {
  const { nodes, rootId } = decisionSections.endoscope;
  const rootNode = nodes[rootId];

  return (
    <Box p={4} bg="gray.800" color="white">
      <Flex justifyContent="space-between" mb={4}>
        <Text fontSize="2xl" bg="red.500" color="white" p={2} borderRadius="md">
          {rootNode.content}
        </Text>
        <Button colorScheme="red">Quitter sans sauver X</Button>
      </Flex>

      <VStack ml={150} spacing={4} alignItems="flex-start">
        {rootNode.children && rootNode.children.map(id => renderNode(nodes[id], nodes))}
      </VStack>

      <Flex justifyContent="center" mt={4}>
        <Button colorScheme="blue">Retour page Accueil</Button>
      </Flex>
    </Box>
  );
};

export default MaintenancePage;
