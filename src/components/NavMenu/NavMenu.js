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
import { routes, routesList } from 'routes';


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
              {
                routesList.filter(route => route.name !== 'home')
                  .map(route => (
                    <Link 
                      to={route.path}
                      onClick={onClose}
                    >
                      <Text fontSize="xl">
                        {route.displayName}
                      </Text>
                    </Link>

                  ))
              }
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
