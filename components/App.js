var React = require('react');
var ReactDOM = require('react-dom');
var SearchBar = require('./SearchBar');
var List = require('./List');
var ListItem = require('./ListItem');
var SearchableList = require('./SearchableList');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
        <SearchableList />
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
