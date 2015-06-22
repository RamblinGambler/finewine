var Table = Reactable.Table;

AuctionListController = ReactMeteor.createClass({
  startMeteorSubscriptions: function() {
    Meteor.subscribe("lots");
  },

  getMeteorState: function() {
    if (FlowRouter.subsReady()) {
      var auctions = _.uniq(Lots.find().fetch().map(function(lot) {
          return lot.auctionName;
        }))
      return {
        auctions: auctions.map(function(name) {
            return { auction: <Link link={Paths.auction(name)} content={ name }/> }
            }
          )
        }
    } else {
      return {
        auctions: []
      }
    }
  },

  componentWillMount: function() {

  },

  render: function () {
    return (
      <div>
        <Navigator location={window.location.pathname}/>
        <Table className="table lot-table" data={this.state.auctions}
          itemsPerPage={10}
        />
        <Footer/>
      </div>
    )
  }
});
