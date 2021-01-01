import React from 'react';
import {
  Flex,
  Spacer,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';


export const Navbar = () => {
  return (
    <Flex>
      <IconButton 
        aria-label="Menu Button" 
        variant="ghost"
        fontSize="lg"
        color="current"
        icon={<HamburgerIcon/>}
        onClick={() => {alert(`I have been pressed!`)}}
      />
      <Spacer />
      <ColorModeSwitcher justify-self="flex-end" />
    </Flex>
  );
};
