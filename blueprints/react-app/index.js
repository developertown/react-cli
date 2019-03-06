'use strict';

const path = require('path');
const rimraf = require('rimraf');
const fs = require('fs');
const stringUtil = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates a React application.',
  name: '@developertown/react-app-blueprint',

  filesToRemove: [],

  // NOTE: this method can return a promise if we need to reach out to npm
  //       or git to get the latest version of something
  locals(options) {
    let name = stringUtil.dasherize(options.entity.name);
    let entity = options.entity;
    let rawName = entity.name;
    let namespace = stringUtil.classify(rawName);

    return {
      name,
      rawName,
      modulePrefix: name,
      namespace,
      yarn: true,
      welcome: false,
      auth0: options.auth0,
      i18n: options.i18n,
      jsonapi: options.jsonapi,
      dotnetBackend: options.dotnetBackend,
      materialUi: options.materialUi,
      redux: options.redux,
      testing: true,
    };
  },

  afterInstall(options) {
    let root = process.cwd();

    if (!options.auth0) {
      // TODO
    }

    if (!options.jsonapi) {
      // TODO:
    }

    if (!options.redux) {
      rimraf.sync(path.join(root, 'src', 'redux-store'));
    }
  }
};
