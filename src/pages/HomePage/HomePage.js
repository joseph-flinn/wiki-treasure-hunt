import React from 'react';
import { 
  Button,
  Box,
  Flex,
  Text,
  Spacer
} from '@chakra-ui/react';
import { BackgroundVideo } from 'components/BackgroundVideo'


export const HomePage = props  => {
  const { ...other } = props; 

  return (
    <>
      <BackgroundVideo/>
      <Flex
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        fontSize="36px"
        fontWeight="bold"
        direction="column"
        flexGrow="1"
      >
        <Text color="white">
          Are you ready for an adventure?
        </Text>
        <Button color="white" variant="outline" mt="10" onClick={() => alert('Hunt alert')}>
          Load Hunt
        </Button>
      </Flex>
    </>
  );
};
