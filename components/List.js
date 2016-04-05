var React = require('react');


var List = React.createClass({
  render: function () {
    return (
      <div id='List'>
        List of items that match {this.props.filterText}
      </div>
    )
  }
});

module.exports = List;
