'use client'

import React from 'react';
import { Box } from '@chakra-ui/react';
import { DecisionTree as DecisionTreeType } from '../data/decisionSections';
import DecisionNode from './DecisionNode';

interface DecisionTreeProps {
  tree: DecisionTreeType;
  onAction: (actionId: string) => void;
}

const DecisionTree: React.FC<DecisionTreeProps> = ({ tree, onAction }) => {
  const renderNode = (nodeId: string) => {
    const node = tree.nodes[nodeId];
    return (
      <DecisionNode
        key={nodeId}
        node={node}
        onAction={onAction}
      >
        {node.children?.map(childId => renderNode(childId))}
      </DecisionNode>
    );
  };

  return (
    <Box overflowX="auto" padding={4}>
      {renderNode(tree.rootId)}
    </Box>
  );
};

export default DecisionTree;