var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header.js');
var Editor = require('./components/editor.js');
var Preview = require('./components/preview.js');

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Editor />
            <Preview />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Index />, document.getElementById('content')
);
