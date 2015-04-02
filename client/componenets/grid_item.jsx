window.GridItem = React.createClass({
  getInitialState: function () {
      return {
          info: 'so hot'
      };
  },
  render: function () {
    return (
      <a className="grid-item">
        <img src={this.props.imgURL} alt="ok"/>
        <h1>{this.props.header} </h1>
        <p>{this.props.subheader} </p>
        <p>{ this.state.info} </p>
      </a>
    )
  }

});
