import { HomePage } from 'pages/HomePage'

export const routes = {
  'home': {
    'component': HomePage,
    'path': '/wiki-treasure-hunt'
  }
}

export const routesList = Object.entries(routes).map(([name, route]) => {
  return { 'name': name, ...route };
})
