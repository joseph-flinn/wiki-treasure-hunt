import React from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Grid,
  DarkMode,
  LightMode,
  extendTheme,
  theme
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { NavBar } from 'components/NavBar'
import { routesList } from 'routes'


const myTheme = extendTheme({
  useSystemColorMode: false,
  styles: {
    global: {
      "img, video": {
        maxWidth: "none",
      }
    }
  },
})

export const App = () => {
  return (
    <ChakraProvider theme={myTheme}>
      <Router>
        <Flex
          height="100vh" 
          direction="column"
        >
          <NavBar />
          <Switch>
            {
              routesList.map(route => (
                <Route 
                  exact={route.name === "home" ? true : false }
                  path={route.path} 
                  component={route.component} 
                />
              ))
            }
          </Switch>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};
