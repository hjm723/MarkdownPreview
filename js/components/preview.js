var React = require('react');
global.React = React;
var md2react = require('md2react');
var previewStores = require('../stores/previewStores');

function getTextState() {
  return {
    text: previewStores.getText()
  };
}

var Preview = React.createClass({
  getInitialState: function() {
    return getTextState();
  },
  componentDidMount: function() {
    previewStores.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getTextState());
  },
  render: function() {
    var markdownText = md2react(this.state.text, {gfm: true, breaks: true});
    return (
      <div className="col-xs-6">
        {markdownText}
      </div>
    );
  }

})

module.exports = Preview;
