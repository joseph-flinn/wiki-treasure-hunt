import React from 'react';
import {
  useHistory,
  Link
} from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Button,
  Text
} from '@chakra-ui/react';
import { routes } from 'routes';


export const NavMenu = props => {
  const { isOpen, onClose, ...others } = props;
  let history = useHistory();

  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>
            <Button 
              variant="ghost"
              onClick={() => {
                onClose()
                history.push(routes.home.path)
              }}
            >
              Home
            </Button>
            <DrawerCloseButton onClose={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              <Link 
                to={routes.home.path}
                onClick={onClose}
              >
                Page 1
              </Link>
              <Link 
                to={routes.home.path}
                onClick={onClose}
              >
                Page 2
              </Link>
              <Link 
                to={routes.home.path}
                onClick={onClose}
              >
                Page 3
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
