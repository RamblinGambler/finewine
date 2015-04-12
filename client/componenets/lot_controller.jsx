LotController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("wines");
  },

  getMeteorState: function() {

    // var current = FlowRouter.current();
    // console.log(Lots.find({_id: FlowRouter.getParam('lotId')}).fetch()[0]);
    if (FlowRouter.subsReady()) {
      var lot = Lots.findOne({_id: FlowRouter.getParam('lotId')});
      var lots = Lots.find({}).fetch()
      var prevLot = Lots.findOne({number: lot.number -1 });
      var total = Lots.find({}).fetch().count()
      if (lot.number == total) {
        var nextLot = Lots.findOne({number: lot.number +1 });
      } else {

      }

      return {
        lot: lot,
        wine: lot.wine(),
        nextLot: nextLot,
        nextLot: prevLot
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
    var boundClick =this.next
    return (
      <Lot
        nextLot={this.state.nextLot}
        imgURL={wine}
        wineName={wine.name}
        vintage={wine.vintage}
        region={wine.region}
        number={this.state.lot.number}
      />
    )
  }
});
