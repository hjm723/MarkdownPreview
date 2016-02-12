var React = require('react');
var previewDispatcher = require('../dispatcher/previewDispatcher');
var previewConstants = require('../constants/previewConstants');

var previewActions = {
  change: function(beforeText) {
    previewDispatcher.dispatch({
      actionType: previewConstants.CHANGE,
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

module.exports = previewActions;
