
window.LotController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    // Meteor.subscribe("lots");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      console.log(Lots.find().fetch()[1]);
      return {
        wine: Lots.find().fetch()[1].number
      }
    } else {
      return {
        wineName: 'nope'
      }
    }
  },

  componentWillMount: function() {
  },

  render: function () {
    return (
      <Lot
        imgURL={this.props.imgURL}
        wineName={this.state.wine}
        vintage={this.props.vintage}
        region={this.props.region}
        number={this.props.wine}
      />
    )
  }
});
