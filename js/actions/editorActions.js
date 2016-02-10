var React = require('react');
var editorDispatcher = require('../dispatcher/editorDispatcher');
var editorConstants = require('../constants/editorConstants');

var editorActions = {
  change: function(beforeText) {
    editorDispatcher.dispatch({
      actionType: editorConstants.CHANGE,
      text: beforeText
    });
  }
};

module.exports = editorActions;
