'use strict';

const path = require('path');
const normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a component with material components.',

  availableOptions: [
    { name: 'path', type: String, default: path.join('components') },
  ],

  filesPath: function() {
    let filesDirectory = 'files';

    return path.join(this.path, filesDirectory);
  },

  fileMapTokens: function() {
    return {
      __root__: function() {
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
    return {
      path: options.path,
      button: options.button,
      textField: options.textField,
      table: options.table,
      card: options.card
    };
  },
};

