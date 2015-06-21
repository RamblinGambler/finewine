LotController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("wines");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      var lot = Lots.findOne({
        number: parseInt(FlowRouter.getParam('number')),
        auctionName: FlowRouter.getParam('name')
        });

      return {
        lot: lot,
        wine: lot.wine(),
        total: Lots.find({auctionName: FlowRouter.getParam('name') }).count()
      }

    } else {
      return {
        lot: { number: 0, auctionName: '' },
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
        lot= {this.state.lot}
        total={this.state.total}
      />
    )
  }
});
