import React from 'react';
import {
  SimpleGrid,
  Container,
  Center,
  Box,
  Text
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom'
import { HuntCard } from 'components/HuntCard'

import hunts from 'static/data/hunts'


export const Hunts = props => {
  const { ...others } = props;

  let history = useHistory();

  const handleCardClick = cardIndex => {
    console.log(cardIndex)

    const hunt = hunts[cardIndex]
    history.push(`/wiki-treasure-hunt/hunt?name=${hunt.id}`)
  }

  return (
    <Container maxW="6xl" h="full">
      <Center>
        <Text fontSize="2xl">Choose Your Hunt</Text>
      </Center>
      <SimpleGrid pt={6} minChildWidth="360px" spacing="20px">
        { 
          hunts.map((hunt, i) => (
            <HuntCard hunt={hunt} key={i} onClick={() => handleCardClick(i)} />
          ))
        }
      </SimpleGrid>
    </Container>
  );
};
