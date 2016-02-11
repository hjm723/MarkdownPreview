var React = require('react');
global.React = React;
var md2react = require('md2react');
var editorStores = require('../stores/editorStores');

function getTextState() {
  return {
    text: editorStores.getText()
  };
}

var Preview = React.createClass({
  getInitialState: function() {
    return getTextState();
  },
  componentDidMount: function() {
    editorStores.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getTextState());
  },
  render: function() {
    var markdownText = md2react(this.state.text, {gfm: true, breaks: true});
    return (
      <div>
        {markdownText}
      </div>
    );
  }

})

module.exports = Preview;
