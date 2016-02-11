var React = require('react');
var editorActions = require('../actions/editorActions');

var Editor = React.createClass({
  render: function() {
    return (
      <div>
        <textarea
          onChange={this._onChange}
        />
      </div>
    );
  },
  _onChange: function(e) {
    editorActions.change(e.target.value);
  }

})

module.exports = Editor;
