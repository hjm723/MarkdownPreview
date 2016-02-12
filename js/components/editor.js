var React = require('react');
var previewActions = require('../actions/previewActions');

var Editor = React.createClass({
  render: function() {
    return (
      <div className="col-xs-6">
        <textarea className="editor" onChange={this._onChange} />
      </div>
    );
  },
  _onChange: function(e) {
    previewActions.change(e.target.value);
  }

})

module.exports = Editor;
