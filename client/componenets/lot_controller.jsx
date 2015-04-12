
window.LotController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("wines");
  },

  getMeteorState: function() {

    // var current = FlowRouter.current();
    // console.log(Lots.find({_id: FlowRouter.getParam('lotId')}).fetch()[0]);
    if (FlowRouter.subsReady()) {
      var lot = Lots.find({_id: FlowRouter.getParam('lotId')}).fetch()[0];
      // console.log("qfewcljsn",lot.wine());
      return {
        lot: lot,
        wine: lot.wine()
      }
    } else {
      return {
        lot: 'nope'
      }
    }
  },

  componentWillMount: function() {
  },

  render: function () {
    var wine = {};
    if (FlowRouter.subsReady()) {
      var wine = this.state.wine
    }
    return (
      <Lot
        imgURL={wine}
        wineName={wine.name}
        vintage={wine.vintage}
        region={wine.region}
        number={this.state.lot.number}
      />
    )
  }
});
