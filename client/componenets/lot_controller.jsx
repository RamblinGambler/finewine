
window.LotController = ReactMeteor.createClass({
  templateName: "LotController",

  getMeteorState: function() {
    return {
      wine: Wines.find().count()
    };
  },

  render: function () {
    console.log(this)
    return (
      <Lot
        imgURL={this.props.imgURL}
        wineName={this.state.wine}
        vintage={this.props.vintage}
        region={this.props.region}
        number={this.props.number}
      />
    )
  }
});