LotController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("wines");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      //TOTO find by auction
      var lot = Lots.findOne({number: parseInt(FlowRouter.getParam('number'))});
      return {
        lot: lot,
        wine: lot.wine(),
        total: Lots.find().count() //TOTO find by auction
      }

    } else {
      return {
        lot: { number: 0 },
        wine: { name: '', vintage: '', region: '' },
        total: 1,
      }
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    // TODO when using auctions may need that too
    return (!!nextState.lot.number) && this.state.lot.number !== nextState.lot.number
  },
  render: function () {
    return (
      <Lot
        imgURL={this.state.wine}
        wineName={this.state.wine.name}
        vintage={this.state.wine.vintage}
        region={this.state.wine.region}
        number={this.state.lot.number}
        total={this.state.total}
      />
    )
  }
});
