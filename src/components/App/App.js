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


const pageFactory = route => {
  return (
    <>
      <Flex
        height="100vh" 
        direction="column"
      >
        <NavBar />
        <Route 
          exact={route.name === "home" ? true : false}
          path={route.path} 
          component={route.component} 
        />
      </Flex>
    </>
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
            routesList.map(route => {
              console.log(JSON.stringify(route, null, 4))
              return pageFactory(route)
            })
          }
        </Switch>
      </Router>
    </ChakraProvider>
  );
};
