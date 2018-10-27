var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },

  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '90px'
  }
};

var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string
  },

  getDefaultProps: function() {
    return{
      text: 'Loading...'
    }
  },

  render: function() {
    return(
      <div style={styles.container}>
        <h1 style={styles.content}>{this.props.text}</h1>
      </div>
    )
  }
});

module.exports = Loading;