var React = require('react');
var PropTypes = require('react').PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;

var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  header: {
    fontWeight: '100'
  }
}

function DayItem(props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  var description = props.day.weather[0].description;

  return(
    <div style={styles.container} onClick={props.handleClick}>
      <img src={'./app/images/weather-icons/' + icon + '.png'} alt="Weather"/>
      <h3 style={styles.header}>{date}</h3>
      <h4 style={styles.header}>{description}</h4>
    </div>
  )
};

DayItem.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired
  }).isRequired,
  handleClick: PropTypes.func
}

module.exports = DayItem;