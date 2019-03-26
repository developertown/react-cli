# React-CLI

## Installation

[**_notion_**](https://www.notionjs.com/)
```bash
notion install @developertown/react-cli
```

**_npm_**

```bash
npm install -g @developertown/react-cli
```

**_yarn_**
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

## Development

```bash
export REACT_APP_BLUEPRINT_PATH=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-app
alias react=$HOME/Development/Work/DeveloperTown/react-cli/packages/react-cli/bin/run
```