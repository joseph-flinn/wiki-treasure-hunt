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
import { HomePage } from 'pages/HomePage'
import { Navbar } from 'components/Navbar'

const routes = [
  {
    'component': HomePage,
    'path': '/'
  }
]

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex direction="column">
          <Navbar/>
          <Switch>
            {
              routes.map(route => (
                <Route path={route.path} component={route.component} />
              ))
            }
          </Switch>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};
