var React = require('react');
var Editor = require('./editor.js');
var Preview = require('./preview.js');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Editor />
        <Preview />
      </div>
    );
  }

})

module.exports = Main;
