import React from 'react';
import { 
  Box,
  Icon
} from '@chakra-ui/react'
import { 
  BsCircle,
  BsCircleFill
} from "react-icons/bs"


const buildRanking = rank => {
  const filled = Array(rank).fill(
    <Icon as={BsCircleFill} />
  )
  const empty = Array(5-rank).fill(
    <Icon as={BsCircle} />
  )

  return [ ...filled, ...empty ]
}


export const HuntDifficulty = props => {
  const { rank, ...others } = props;

  return (
    <Box d="flex">
      {
        buildRanking(rank)
      }
    </Box>
  );
};
