import React from 'react';
import {
  SimpleGrid,
  Container,
  Center,
  Box,
  Text
} from '@chakra-ui/react';
import { HuntCard } from 'components/HuntCard'


export const Hunts = props => {
  const { ...others } = props;


  // This needs to be dynamically generated somehow with the CI pipeline
  const hunts = [
    {
      "name": "The Jade Dragon",
      "story": "In the late 14th century, the great Jade Dragon of the Ming Dynasty vanished. Many sea voyages had been taken during the time"
    },
    {
      "name": "The Jade Dagger",
      "story": "The great Chinese General of the 3rd Ming Dynasty lost his dagger at sea trying to recover the lost Jade Dragon."
    },
  ]

  return (
    <Container maxW="6xl" h="full">
      <Center>
        <Text fontSize="2xl">Hunts will be shown here</Text>
      </Center>
      <SimpleGrid pt={6} minChildWidth="360px" spacing="20px">
        { 
          hunts.map(hunt => (
            <HuntCard hunt={hunt} />
          ))
        }
      </SimpleGrid>
    </Container>
  );
};
