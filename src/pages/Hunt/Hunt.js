import React from 'react';
import {
  Text
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

function useQuery() {
  let location = useLocation()
  return new URLSearchParams(location.search);
}

export const Hunt = props => {
  const { ...others } = props;

  let query = useQuery()

  return (
    <Text fontSize="xl">
      Hello World
      {query.get('name')}
    </Text>
  );
};
