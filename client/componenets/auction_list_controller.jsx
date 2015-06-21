var Table = Reactable.Table;

AuctionListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("auctions");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      return {
        auctions: Auctions.find().fetch(),
        lot: <Link link={path} content={wine.name}/>,
      }
    } else {
      return {
        auctions: 'nope'
      }
    }
  },

  componentWillMount: function() {

  },

  render: function () {
    return (
      <div>
        <Navigator/>
        <Table className="table lot-table" data={this.state.auctions}
          itemsPerPage={10}
        />
        <Footer/>
      </div>
    )
  }
});
