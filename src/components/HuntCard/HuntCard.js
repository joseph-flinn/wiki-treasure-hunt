import React from 'react';
import {
  Box,
  Text,
  Spacer
} from '@chakra-ui/react';


export const HuntCard = props => {
  const { hunt, ...others } = props;

  return (
    <Box 
      w="360px" 
      h="240px"
      bg="gray.300"
      color="black"
      borderRadius="lg"
    >
      <Box p={4} h="full" d="flex" flexDirection="column">
        <Text fontSize="xl">{ hunt.name }</Text>
        <Spacer />
        <Text p={3}>{ hunt.story }</Text>
      </Box>
    </Box>
  );
};
