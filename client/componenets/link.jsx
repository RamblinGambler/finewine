Link = React.createClass({
  render: function () {
    return (
      <a href={this.props.link}> {this.props.content}</a>
    )
  }
})
