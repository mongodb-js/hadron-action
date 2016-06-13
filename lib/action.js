'use strict';

const debug = require('debug')('hadron-action');
const Reflux = require('reflux');

/**
 * The action for beginning document edits.
 */
const beginEditDocument = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Object} id - The document id.
   */
  preEmit: function(id) {
    debug(`Editing document ${id}.`);
  }
});

/**
 * The action for canceling document edits.
 */
const cancelEditDocument = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Object} id - The document id.
   */
  preEmit: function(id) {
    debug(`Canceling edits to document ${id}.`);
  }
});

/**
 * The action for a component being deregistered.
 */
const componentDeregistered = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Component} component - The React component.
   */
  preEmit: function(component) {
    debug(`Component ${component.displayName} deregistered.`);
  }
});

/**
 * The action for a component being registered.
 */
const componentRegistered = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Component} component - The React component.
   */
  preEmit: function(component) {
    debug(`Component ${component.displayName} registered.`);
  }
});

/**
 * The action for deleting a document.
 */
const deleteDocument = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Object} id - The document id.
   */
  preEmit: function(id) {
    debug(`Deleting document ${id}.`);
  }
});

/**
 * The action for adding an element to a document.
 */
const documentElementAdded = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Element} element - The element.
   * @param {String} field - The field name.
   * @param {String} value - The value.
   */
  preEmit: function(element, field, value) {
    debug(`Adding element to document: field: ${field}, value: ${value}.`);
  }
});

/**
 * The action for updating an element in a document.
 */
const documentElementEdited = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Element} element - The element.
   * @param {String} field - The field name.
   * @param {String} value - The value.
   */
  preEmit: function(element, field, value) {
    debug(`Updating element on document: field: ${field}, value: ${value}.`);
  }
});

/**
 * The action for deleting an element from a document.
 */
const documentElementRemoved = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Element} element - The element.
   * @param {String} field - The field name.
   */
  preEmit: function(element, field) {
    debug(`Deleting element from document: field: ${field}.`);
  }
});

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

/**
 * The action for submitting document edits.
 */
const submitEditDocument = Reflux.createAction({
  /**
   * Log the action.
   *
   * @param {Object} id - The document id.
   */
  preEmit: function(id) {
    debug(`Submitting edits to document ${id}.`);
  }
});

module.exports.beginEditDocument = beginEditDocument;
module.exports.cancelEditDocument = cancelEditDocument;
module.exports.componentDeregistered = componentDeregistered;
module.exports.componentRegistered = componentRegistered;
module.exports.deleteDocument = deleteDocument;
module.exports.documentElementAdded = documentElementAdded;
module.exports.documentElementEdited = documentElementEdited;
module.exports.documentElementRemoved = documentElementRemoved;
module.exports.fetchNextDocuments = fetchNextDocuments;
module.exports.filterChanged = filterChanged;
module.exports.namespaceChanged = namespaceChanged;
module.exports.submitEditDocument = submitEditDocument;
