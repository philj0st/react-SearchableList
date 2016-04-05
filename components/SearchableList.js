var React = require('react');
var SearchBar = require('./SearchBar');
var List = require('./List');

var SearchableList = React.createClass({
  getInitialState: function () {
    return({filterText: ''})
  },
  //change the state in this wrapper function
  changeFilterText: function (newText) {
    this.setState({filterText: newText});
  },
  render: function () {
    return (
      <div id='SearchableList'>
      {/*pass the wrapper function to the SearchBar component via props*/}
        <SearchBar changeFilterText={this.changeFilterText} filterText={this.state.filterText} />
        <List filterText={this.state.filterText} />
      </div>
    )
  }
});

module.exports = SearchableList;
