var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    return(
      <div>
        <Detail
          dayWeather={this.props.location.state.dayWeather}
          city={this.props.routeParams.city} />
      </div>
    )
  }
});

module.exports = DetailContainer;