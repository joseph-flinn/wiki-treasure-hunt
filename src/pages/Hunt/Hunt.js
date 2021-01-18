import React from 'react';
import {
  Box,
  Button,
  Code,
  Spacer,
  Text
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import hunts from 'static/data/hunts'


function useQuery() {
  let location = useLocation()
  return new URLSearchParams(location.search);
}

export const Hunt = props => {
  const { ...others } = props;

  let query = useQuery()
  const hunt = hunts.filter(hunt => hunt.id == query.get('name'))[0]

  return (
    <Box d="flex" h="100%" flexDirection="column">
      <Box d="flex" m="2">
        <Text ml="2" fontSize="xl">
          {hunt.name}
        </Text>
        <Spacer />
        <Button 
          colorScheme="green"
          mr="4"
        >
          Load
        </Button>
        <Button 
          colorScheme="orange"
          mr="4"
        >
          Reset
        </Button>
      </Box>
      <Box flexGrow="1">
        <Text>
          {JSON.stringify(hunt, null, 4)}
        </Text>
      </Box>
    </Box>
  );
};
