
window.LotController = ReactMeteor.createClass({
  templateName: "LotController",

  render: function () {
    return (
      <Lot 
        imgURL={this.props.imgURL} 
        wineName={this.props.wineName} 
        vintage={this.props.vintage} 
        region={this.props.region}
        number={this.props.number}
      />
    )
  },
  getMeteorState: function() {
      return {
        info: 'testing'
      };
    }
});