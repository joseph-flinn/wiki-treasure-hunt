import React from 'react';
import {
  Box,
  AspectRatio
} from '@chakra-ui/react';

import videoSource from 'static/videos/background.mp4'
// Video by Pressmaster from Pexels
// Video by Kelly Lacy from Pexels


export const BackgroundVideo = props => {
  const { ...others } = props;

  return (
    <Box
      position="absolute"
      zIndex="-1"
      height="full"
      width="full"
      overflow="hidden"
    >
      <video 
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"

        autoPlay="autoPlay" 
        loop="loop" 
        muted 
      >
        <source src={videoSource} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};
