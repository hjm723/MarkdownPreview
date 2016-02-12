var previewDispatcher = require('../dispatcher/previewDispatcher');
var EventEmitter = require('events').EventEmitter;
var previewConstants = require('../constants/previewConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _text = "";

var previewStores = assign({}, EventEmitter.prototype, {
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

previewDispatcher.register(function(action) {

  switch (action.actionType) {
    case previewConstants.CHANGE:
      _text = action.text;
      previewStores.emitChange();
      break;
    default:

  }
});

module.exports = previewStores;
