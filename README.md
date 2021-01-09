# Wikipedia Treasure Hunt

The React project uses the [Chakra-UI](is://chakra-ui.com/) component library. Documentation
on it can be found [here](https://chakra-ui.com/docs/getting-started). 

[Wikipedia Treasure Hunt](https://joseph-flinn.github.io/wiki-treasure-hunt/) is currently 
being hosted on GitHub Pages


## Dependencies
- npm 6.14+
- node 


## Setup
Whenever using `npm`, I would highly suggest using [nvm](https://github.com/nvm-sh/nvm) to 
manage the currently used version of `node`. This allows for clean maintainance for different
node projects on the same computer.

### `npm install`
Installs the node dependencies that are needed to run the project.

### `npm start`
Starts a React server and opens a tab in your brower that hot loads changes to 
to the code.


## Custom `npm` scripts
I got tired of creating nested directories and the same file for a new and empty React component
every time I needed a new one. I have written a couple of scripts to make this process less 
tedious. To understand what is happening, take a look at the `"scripts"` section of the `package.json`
file and the `scripts/` directory in the project.

### `npm run add:component <ComponentName>`
Adds the component file structure that all components follow and adds the component to the 
`src/commponents` directory.

### `npm run add:page <PageName>`
Adds the component file structure that all pages follow and adds the page component to the
`src/pages` directory.


## Contributing
Contributions are welcome! Please read the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing 
and see [Contributing](CONTRIBUTING.md) for a guide on the different ways to contribute and expectaions
on how to do so.

Issues with the code or hunts can be submitted with GitHub Issues 
[here](https://github.com/joseph-flinn/wiki-treasure-hunt/issues). Feature Requests may be submitted
by creating an Issue; however, the maintainers may ask the author to create an ADR following the 
ADR creation guidelines outlined in [Contributing](CONTRIBUTING.md).

This project uses [ADRs](docs/README.md) to track desgin decisions across the distributed work
environment, especially useful in cases with a lot of time between design and 
implementation. Please see [Contributing](CONTRIBUTING.md) for how to add one to the project.

Ongoing and planned work can be found on our 
[Projects](https://github.com/joseph-flinn/wiki-treasure-hunt/projects/1) board.

## License
This software is provided under the MIT license and is provided "as is". Please use the software
responsibly and keep the universe in balance `#notalawyer`
