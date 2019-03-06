'use strict';

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
      modulePrefix: name,
      namespace,
      welcome: options.welcome,
      auth0: options.auth0,
      i18n: options.i18n,
      jsonapi: options.jsonapi,
      dotnetBackend: options.dotnetBackend,
      materialUi: options.materialUi,
      redux: options.redux,
      testing: true,
    };
  },

  fileMapTokens(options) {
    return {
      __component__() {
        return options.locals.component;
      },
    };
  }
};
