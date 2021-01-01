import React from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { NavBar } from 'components/NavBar'
import { routesList } from 'routes'


export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex height="100vh" direction="column">
          <NavBar />
          <Switch>
            {
              routesList.map(route => (
                <Route path={route.path} component={route.component} />
              ))
            }
          </Switch>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};
