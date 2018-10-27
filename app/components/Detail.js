var React = require('react');
var DayItem = require('./DayItem');
var utils = require('../helpers/utils');
var convertTemp = utils.convertTemp;

var styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },

  header: {
    fontWeight: '100'
  },

  descriptionContainer: {
    fontSize: '18px',
    fontWeight: '100',
    textAlign: 'center'
  }
}

function Detail(props) {
  return(
    <div style={styles.container}>
      <h1 style={styles.header}>{props.city}</h1>
      <DayItem day={props.dayWeather}/>
      <div style={styles.descriptionContainer}>
        <p>humidity: {props.dayWeather.humidity}</p>
        <p>min temp: {convertTemp(props.dayWeather.temp.min)} degrees</p>
        <p>max temp: {convertTemp(props.dayWeather.temp.max)} degrees</p>
      </div>
    </div>
  )
}

module.exports = Detail;