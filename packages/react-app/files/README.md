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

