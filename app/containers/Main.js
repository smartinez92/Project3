var React = require('react');

var styles = {
  mainContainer: {
    width: '100%',
    height: '100vh'
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#0E2611',
    padding: 5
  },

  header: {
    margin: 0,
    color: '#fff'
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  formButton: {
    margin: '10px'
  }
}

var Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      city: ''
    }
  },

  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    });
  },

  handleSubmitCity: function(e) {
    e.preventDefault();
    var city = this.state.city;
    console.log(this.state.city);
    this.context.router.push('/forecast/' + this.state.city);
  },

  render: function() {
    return(
      <div style={styles.mainContainer}>
        
        <div style={styles.container}>
          <h2 style={styles.header}>Windmill Hut</h2>
          
          <form onSubmit={this.handleSubmitCity} style={styles.formContainer}>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Valencia, Spain"
                value={this.state.city}
                onChange={this.handleUpdateCity} />
            </div>

            <div>
              <button
                className="btn btn-success"
                type="submit"
                style={styles.formButton}>
                  Get Weather
              </button>
            </div>
          </form>
        </div>

        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;