/**
 *
 * This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */


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
        <p>{this.state.info} </p>

      </a>
    )
  }

});