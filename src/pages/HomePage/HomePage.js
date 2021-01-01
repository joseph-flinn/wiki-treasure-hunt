import React from 'react';
import { 
  Box,
  Flex,
  Text,
  VStack,
  Grid,
} from '@chakra-ui/react'


const classes = {
  "bgVideoContainer": {
    "position": "relative",
    "minHeight": "300px",
    "maxHeight": "880px",
    "overflow": "hidden",
    "marginBottom": "500px"
  },
  "video": {
    "width": "100%",
    "height": "100%"
  },
}

const BackgroundVideo = () => {
  const videoSource = "";

  return (
    <Box className={classes.bgVideoContainer}>
      <video autoPlay="autoPlay" loop="loop" muted className={classes.video}>
        <source src={videoSource} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}


export const HomePage = () => {
  return (
    <Flex
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      fontSize="xl"
      flexGrow="1"
    >
      <Text>
        This is the Home page
      </Text>
    </Flex>
  );
};
