import React from 'react';
import {
  Box,
  Text,
  Spacer
} from '@chakra-ui/react';

import { HuntDifficulty } from 'components/HuntDifficulty'


export const HuntCard = props => {
  const { hunt, onClick, ...others } = props;

  return (
    <Box 
      w="360px" 
      h="240px"
      bg="gray.300"
      color="black"
      borderRadius="lg"
      justifySelf="center"
      _hover={{
        "transform": "scale(1.05)"
      }}
      onClick={onClick}
    >
      <Box p={4} h="full" d="flex" flexDirection="column">
        <Text fontSize="xl">{ hunt.name }</Text>
        <Text p={3}>{ hunt.story }</Text>
        <Spacer />
        <HuntDifficulty rank={ hunt.rank } />
      </Box>
    </Box>
  );
};
