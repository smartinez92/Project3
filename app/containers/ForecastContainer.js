var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      forecast: {}
    }
  },

  componentDidMount: function() {
    api.getCityForecast(this.props.routeParams.city)
      .then(function(forecast) {
        this.setState({
          isLoading: false,
          forecast: forecast
        });
        console.log(forecast.list);
      }.bind(this))
  },

  handleClick: function(dayWeather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        dayWeather: dayWeather
      }
    });
  },

  render: function() {
    return(
      <Forecast
        isLoading={this.state.isLoading}
        forecast={this.state.forecast}
        cityName={this.props.routeParams.city}
        handleClick={this.handleClick} />
    )
  }
});

module.exports = ForecastContainer;