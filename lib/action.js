'use strict';

const debug = require('debug')('hadron-action');
const Reflux = require('reflux');

/**
 * The action for fetching more documents.
 */
const fetchNextDocuments = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Integer} page - The current page.
   */
  preEmit: function(page) {
    debug(`Fetching the documents on page: ${page + 1}.`);
  }
});

/**
 * The action for the filter being changed.
 */
const filterChanged = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Object} filter - The filter.
   */
  preEmit: function(filter) {
    debug(`Filter changed to: ${filter}.`);
  }
});

/**
 * The action for the namespace being changed.
 */
const namespaceChanged = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {String} namespace - The namespace.
   */
  preEmit: function(namespace) {
    debug(`Namespace changed to: ${namespace}.`);
  }
});

module.exports.fetchNextDocuments = fetchNextDocuments;
module.exports.filterChanged = filterChanged;
module.exports.namespaceChanged = namespaceChanged;
