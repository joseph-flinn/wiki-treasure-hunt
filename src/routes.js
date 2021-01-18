import { HomePage } from 'pages/HomePage'
import { HowToPlay } from 'pages/HowToPlay'
import { Hunts } from 'pages/Hunts'
import { Hunt } from 'pages/Hunt'

export const routes = {
  'home': {
    'component': HomePage,
    'path': '/wiki-treasure-hunt',
    'displayName': 'Home'
  },
  'hunts': {
    'component': Hunts,
    'path': '/wiki-treasure-hunt/hunts',
    'displayName': 'Hunts'
  },
  'hunt': {
    'component': Hunt,
    'path': '/wiki-treasure-hunt/hunt',
    'displayName': 'Hunt'
  },
  'howToPlay': {
    'component': HowToPlay,
    'path': '/wiki-treasure-hunt/how-to-play',
    'displayName': 'How To Play'
  }
}

export const routesList = Object.entries(routes).map(([name, route]) => {
  return { 'name': name, ...route };
})
