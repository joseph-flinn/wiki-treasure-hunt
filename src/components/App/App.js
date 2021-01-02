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
import { BackgroundVideo } from 'components/BackgroundVideo'
import { routesList } from 'routes'


const pageFactory = route => {
  if ( route.name == "home" ) {
    return (
      <>
        <BackgroundVideo />
        <Flex
          height="100vh" 
          direction="column"
          background="rgba(0, 0, 0, 0.2)"
        >
          <NavBar />
          <Route path={route.path} component={route.component} />
        </Flex>
      </>
    )
  }

  return (
    <Flex
      height="100vh" 
      direction="column"
    >
      <NavBar />
      <Route path={route.path} component={route.component} />
    </Flex>
  )
}


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
        <Switch>
          {
            routesList.map(route => (
              pageFactory(route)
            ))
          }
        </Switch>
      </Router>
    </ChakraProvider>
  );
};
