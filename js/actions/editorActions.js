var React = require('react');
var editorDispatcher = require('../dispatcher/editorDispatcher');
var editorConstants = require('../constants/editorConstants');

var editorActions = {
  change: function(beforeText) {
    editorDispatcher.dispatch({
      actionType: editorConstants.CHANGE,
      text: beforeText
    });
  },
  onClick_b: function() {

  },
  onClick_code: function() {

  },
  onClick_i: function() {
    
  }
};

module.exports = editorActions;
