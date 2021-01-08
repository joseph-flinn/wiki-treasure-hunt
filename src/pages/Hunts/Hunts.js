import React from 'react';
import {
  SimpleGrid,
  Box
} from '@chakra-ui/react';

import { routesList } from 'routes'


export const Hunts = props => {
  const { ...others } = props;

  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      { 
        routesList.map(hunt => (
          <Box h="80px">{hunt.name}</Box>
        ))
      }
    </SimpleGrid>
  );
};
