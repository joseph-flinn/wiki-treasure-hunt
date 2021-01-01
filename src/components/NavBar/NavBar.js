import React from 'react';
import {
  Flex,
  Spacer,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { NavMenu } from 'components/NavMenu'


export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex>
        <IconButton 
          aria-label="Menu Button" 
          variant="ghost"
          fontSize="lg"
          color="current"
          icon={<HamburgerIcon/>}
          onClick={onOpen}
        />
        <Spacer />
        <ColorModeSwitcher justify-self="flex-end" />
      </Flex>
      <NavMenu onClose={onClose} isOpen={isOpen}/> 
    </>
  );
};
