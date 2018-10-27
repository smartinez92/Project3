var React = require('react');
var PropTypes = require('react').PropTypes;
var Loading = require('./Loading');
var DayItem = require('./DayItem');

var styles = {
  container: {
    textAlign: 'center'
  },

  header: {
    fontWeight: '100',
  },

  subHeader: {
    fontWeight: '100',
  },

  dayItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}

function Forecast(props) {
  if(props.isLoading === true) {
    return(
      <Loading />
    )
  }

  return(
    <div style={styles.container}>
      <h1 style={styles.header}>{props.cityName} Forecast</h1>
      <h3 style={styles.subHeader}>Select a day</h3>
      <div style={styles.dayItem}>
        {props.forecast.list.map(function(listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
};

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired,
  cityName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

module.exports = Forecast;