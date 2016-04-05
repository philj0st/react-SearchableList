var React = require('react');

var SearchBar = React.createClass({
  handleChange: function (e) {
    //call the function we got passed from SearchableList
    this.props.changeFilterText(e.target.value);
  },
  render: function () {
    return (
      <div id='SearchBar'>
        {/*handle changes with the freshly created handleChange function*/}
        <input
          type="text"
          value={this.props.filterText}
          onChange={this.handleChange}
          autofocus
        />
      </div>
    )
  }
});

module.exports = SearchBar;
