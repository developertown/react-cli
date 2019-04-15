# React-CLI

## Installation

### [**_notion_**](https://www.notionjs.com/)
```bash
notion install @developertown/react-cli
```

### **_npm_**

```bash
npm install -g @developertown/react-cli
```

### **_yarn_**
```bash
yarn global add @developertown/react-cli
```



## Usage

### _running the dev server_
```bash
react new my-project
cd my-project
yarn start:dev
```

### _generators_

```bash
react g component my-component

# -----  output -----
installing component
  create src/ui/components/my-component/__tests__/page.ts
  create src/ui/components/my-component/__tests__/rendering-test.ts
  create src/ui/components/my-component/index.tsx
  ✔ Formatting

```

### _adding to an existing project_
```bash
# cd to project directory
$ react prepare

# ---- output ----
  ✔ Checking for required dependencies
  ✔ Ensuring that blueprints are installed
  ✔ Done!
```

## Development

```bash
export REACT_APP_BLUEPRINT_PATH=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-app

alias react=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-cli/bin/run


# to develop generators
cd $HOME/Development/Work/DeveloperTown/react-cli/packages/react-generators
yarn link
# cd to your project path
yarn link "@developertown/react-generators-blueprint"
```

### Testing installation

```bash
rm -rf ~/.notion
# install notion
# new shell
notion install node 8

# setup refs to local project
export REACT_APP_BLUEPRINT_PATH=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-app

alias react=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-cli/bin/run

# create new app
react new my-app

# yarn and ember-cli should now be installed
```

## Publishing

TODO: setup lerna
