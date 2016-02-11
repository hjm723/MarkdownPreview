var React = require('react');
var ReactDOM = require('react-dom');
var Editor = require('./components/editor.js');
var Preview = require('./components/preview.js');

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <Editor />
        <Preview />
      </div>
    );
  }
});

ReactDOM.render(
  <Index />, document.getElementById('content')
);
