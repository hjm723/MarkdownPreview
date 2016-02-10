var editorDispatcher = require('../dispatcher/editorDispatcher');
var EventEmitter = require('events').EventEmitter;
var editorConstants = require('../constants/editorConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _text = "";

var editorStores = assign({}, EventEmitter.prototype, {
  getText: function() {
    return _text;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }
});

editorDispatcher.register(function(action) {

  switch (action.actionType) {
    case editorConstants.CHANGE:
      _text = action.text;
      editorStores.emitChange();
      break;
    default:

  }
});

module.exports = editorStores;
