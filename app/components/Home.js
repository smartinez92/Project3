var React = require('react');

var styles = {
  container: {
    backgroundImage: "url('app/images/link-windmill.jpg')",
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100% - 64px)'
  },

  header: {
    fontWeight: '100',
    color: '#fff'
  }
}

var Home = React.createClass({
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
      city: e.target.value,
    });
  },

  handleSubmitCity: function(e) {
    e.preventDefault();
    var city = this.state.city
    console.log(this.state.city);
    this.context.router.push('/forecast/' + this.state.city);
  },

  render: function() {
    return(
      <div className="col-sm-12 text-center" style={styles.container}>
        <h1 style={styles.header}>Enter a city and country</h1>
        <div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={this.handleSubmitCity}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Valencia, Spain"
                value={this.state.city}
                onChange={this.handleUpdateCity} />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success btn-block"
                type="submit">
                  Get Weather
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Home;