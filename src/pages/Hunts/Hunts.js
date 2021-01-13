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


// This needs to be dynamically generated somehow with the CI pipeline
const hunts = [
  {
    "name": "The Jade Dragon",
    "story": "In the late 14th century, the great Jade Dragon of the Ming Dynasty vanished. Many sea voyages had been taken during the time",
    "rank": 3,
    "id": "the-jade-dragon"
  },
  {
    "name": "The Jade Dagger",
    "story": "The great Chinese General of the 3rd Ming Dynasty lost his dagger at sea trying to recover the lost Jade Dragon.",
    "rank": 5,
    "id": "the-jade-dagger"
  },
  {
    "name": "Title 1",
    "story": "This is where the story goes",
    "rank": 0,
    "id": "title-1"
  },
  {
    "name": "Title 2",
    "story": "This is where the story goes",
    "rank": 4,
    "id": "title-2"
  },
]


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
        <Text fontSize="2xl">Hunts will be shown here</Text>
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
