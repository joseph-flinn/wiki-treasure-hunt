import React from 'react';
import { 
  Button,
  Box,
  Flex,
  Text,
  Spacer
} from '@chakra-ui/react';


export const HomePage = props  => {
  const { ...other } = props; 

  return (
    <Flex
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      fontSize="36px"
      fontWeight="bold"
      direction="column"
      flexGrow="1"
    >
      <Text>
        Are you ready for an adventure?
      </Text>
      <Button mt='10' onClick={() => alert('Hunt alert')}>
        Load Hunt
      </Button>
    </Flex>
  );
};
