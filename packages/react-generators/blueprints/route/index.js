'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const stringUtil = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates a route and a template, and registers the route with the router.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: '',
    },
    {
      name: 'skip-router',
      type: Boolean,
      default: false,
    },
  ],

  fileMapTokens: function() {
    return {
      __root__(/* options */) {
        return path.join('src', 'ui', 'routes');
      },
      __path__(options) {
        return path.join(options.dasherizedModuleName);
      },
    };
  },

  locals: function(options) {
    let moduleName = options.entity.name;

    return {
      moduleName: stringUtil.dasherize(moduleName),
      routePath: options.path,
      urlPath: this.applicationURLPath(options),
    };
  },

  applicationURLPath(options) {
    let moduleName = options.entity.name;

    return stringUtil.dasherize(moduleName);
  },

  shouldTouchRouter: function(name, options) {
    return (
      !options.dryRun &&
      !options.skipRouter
    );
  },

  afterInstall: function(options) {
    updateRouter.call(this, 'add', options);
  },

  afterUninstall: function(options) {
    updateRouter.call(this, 'remove', options);
  },
};

function updateRouter(action, options) {
  let entity = options.entity;
  let actionColorMap = {
    add: 'green',
    remove: 'red',
  };
  let color = actionColorMap[action] || 'gray';

  if (this.shouldTouchRouter(entity.name, options)) {
    writeRoute(action, entity.name, options);

    this.ui.writeLine('updating router');
    this._writeStatusToUI(chalk[color], action + ' route', entity.name);

    writePaths(action, entity.name, options);

    this._writeStatusToUI(chalk[color], action + ' path', entity.name);

  }
}

function pathsLocation(options) {
  let namespace = options.entity.name.split('/').slice(0, -1);
  return path.join('src', 'ui', 'routes', ...namespace, 'paths.ts');
}

function writePaths(action, name, options) {
  let pathsFile = pathsLocation(options);
  let topLevelPathsPath = path.join('src', 'ui', 'routes', 'paths.ts');


  let pathsSource = fs.readFileSync(pathsFile, 'utf-8');

  // update router
  // update paths

  // fs.writeFileSync(routerPath, newRoutes.code());
  // fs.writeFileSync(routerPath, newRoutes.code());
}

function writeRoute(action, name, options) {
  let isNested = name.includes('/');
  let routerPath = path.join('src', 'ui', 'routes', 'root.tsx');

  let segments = name.split('/');

  let routerSource = fs.readFileSync(routerPath, 'utf-8');

  // update router

  // fs.writeFileSync(routerPath, newRoutes.code());

}
