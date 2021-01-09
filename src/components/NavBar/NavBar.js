import React from 'react';
import {
  Flex,
  Spacer,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

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
          color="white"
          icon={<HamburgerIcon/>}
          onClick={onOpen}
        />
        <Spacer />
      </Flex>
      <NavMenu onClose={onClose} isOpen={isOpen}/> 
    </>
  );
};
