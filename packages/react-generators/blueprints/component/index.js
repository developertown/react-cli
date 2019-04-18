'use strict';

const path = require('path');
const normalizeEntityName = require('ember-cli-normalize-entity-name');
const EOL = require('os').EOL;

module.exports = {
  description: 'Generates a component.',

  availableOptions: [
    { name: 'path', type: String, default: path.join('components') },
  ],

  filesPath: function() {
    let filesDirectory = 'files';

    return path.join(this.path, filesDirectory);
  },

  fileMapTokens: function() {
    return {
      __root__: function(options) {
        return path.join('src', 'ui');
      },
      __path__: function(options) {
        return path.join(options.locals.path, options.dasherizedModuleName);
      },
    };
  },

  normalizeEntityName: function(entityName) {
    return normalizeEntityName(entityName);
  },

  locals: function(options) {
    let contents = EOL;

    return {
      contents: contents,
      path: options.path,
      button: options.button,
      textField: options.textField,
      table: options.table,
      card: options.card
    };
  },
};
