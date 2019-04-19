react-cli
=========

CLI for generating and maintaining react projects at DeveloperTown

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/react-cli.svg)](https://npmjs.org/package/react-cli)
[![Downloads/week](https://img.shields.io/npm/dw/react-cli.svg)](https://npmjs.org/package/react-cli)
[![License](https://img.shields.io/npm/l/react-cli.svg)](https://github.com/developertown/react-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @developertown/react-cli
$ react COMMAND
running command...
$ react (-v|--version|version)
@developertown/react-cli/0.11.0 linux-x64 node-v10.15.1
$ react --help [COMMAND]
USAGE
  $ react COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`react fetch-configs`](#react-fetch-configs)
* [`react generate GENERATOR NAME`](#react-generate-generator-name)
* [`react generateMaterial NAME`](#react-generatematerial-name)
* [`react help [COMMAND]`](#react-help-command)
* [`react new [PROJECTNAME]`](#react-new-projectname)
* [`react prepare`](#react-prepare)
* [`react upgrade`](#react-upgrade)

## `react fetch-configs`

Fetches config files for linting and typescript projects

```
USAGE
  $ react fetch-configs

EXAMPLE
  $ react fetch-configs
```

_See code: [src/commands/fetch-configs.ts](https://github.com/developertown/react-cli/blob/v0.11.0/src/commands/fetch-configs.ts)_

## `react generate GENERATOR NAME`

Generates a route with tests, path entries, and intermediare route files if applicable

```
USAGE
  $ react generate GENERATOR NAME

OPTIONS
  --route=route  directory of a route to place the component in. Will live in `route-path/-components/`

ALIASES
  $ react g

EXAMPLES
  $ react generate component component-name
  $ react g component component-name
  $ react g component path/to/component-name
  $ react g component component-name --route=dashboard/posts

  $ react g route route-name
  $ react g route path/to/route-name
```

_See code: [src/commands/generate.ts](https://github.com/developertown/react-cli/blob/v0.11.0/src/commands/generate.ts)_

## `react generateMaterial NAME`

Creates components with Material Components installed

```
USAGE
  $ react generateMaterial NAME

ALIASES
  $ react material
  $ react m

EXAMPLES
  $ react material component-name
  $ react m path/to/component
```

_See code: [src/commands/generateMaterial.ts](https://github.com/developertown/react-cli/blob/v0.11.0/src/commands/generateMaterial.ts)_

## `react help [COMMAND]`

display help for react

```
USAGE
  $ react help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `react new [PROJECTNAME]`

Creates a new react application

```
USAGE
  $ react new [PROJECTNAME]

EXAMPLES
  $ react new project-name --jsonapi --redux
  $ react new project-name --auth0
  $ react new project-name
```

_See code: [src/commands/new.ts](https://github.com/developertown/react-cli/blob/v0.11.0/src/commands/new.ts)_

## `react prepare`

Prepares an app to use the react-cli

```
USAGE
  $ react prepare

EXAMPLE
  $ react prepare
```

_See code: [src/commands/prepare.ts](https://github.com/developertown/react-cli/blob/v0.11.0/src/commands/prepare.ts)_

## `react upgrade`

Upgrades an existing project

```
USAGE
  $ react upgrade

EXAMPLE
  $ react upgrade
```

_See code: [src/commands/upgrade.ts](https://github.com/developertown/react-cli/blob/v0.11.0/src/commands/upgrade.ts)_
<!-- commandsstop -->
