# <%= rawName %>

## Prerequisites

## Installation / Setup

* `git clone <repository-url>` this repository
* `cd <%= name %>`
* `yarn install`

## Running / Development

* `yarn start:dev`
* Visit your app at [http://localhost:9091](http://localhost:9091)
* `yarn test:watch:detached`
* Visit your tests at [http://localhost:9876/debug.html](http://localhost:9876/debug.html)


### Code Generators

Make use of the code generators for components, routes, tests, etc. try `react help generate` for more details.

### Running Tests

* `yarn test:ci` - headless / non-interactive terminal run
* `yarn test:watch:detached` - launches server to debug tests in the browser

### Building

* `yarn webpack:build` (production)

### Analyzing Bundled Dependencies

* `yarn analyze`

### Linting

* `yarn lint:js` - show linting errors and warning in js/ts files
* `yarn lint:js --fix --quiet` - fix errors and don't print warnings in js/ts files


### Using a local / development version of the react-cli

Set the app environment variable and set an alias to the local copy of react-cli's executable file.

This is useful for testing / implementing additional generators against production apps.

```bash
export REACT_APP_BLUEPRINT_PATH=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-app

alias react=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-cli/bin/run

# to develop generators
cd $HOME/Development/Work/DeveloperTown/react-cli/packages/react-generators
yarn link
# cd to your project path
yarn link "@developertown/react-generators-blueprint"


```
