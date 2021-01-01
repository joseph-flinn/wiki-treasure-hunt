import React from 'react';
import { Text } from '@chakra-ui/react'


export const HomePage = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            This is the HomePage
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};
