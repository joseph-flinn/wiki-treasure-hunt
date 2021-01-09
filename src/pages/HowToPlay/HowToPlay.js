import React from 'react';
import {
  Text
} from '@chakra-ui/react';


export const HowToPlay = props => {
  const { ...others } = props;

  return (
    <Text fontSize="3xl">
      Follow the clues. Find the keys to unlock the next clue. Find the treasure before your friends.
    </Text>
  );
};
